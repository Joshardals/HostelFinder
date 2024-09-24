import { checkAvailability } from "@/lib/mail/mail.action";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";

export function ContactForm({
  hostelName,
  name,
  number,
}: {
  hostelName: string;
  name: string;
  number: string;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      await checkAvailability({
        hostelName,
        username: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      });

      window.alert(
        "Your inquiry has been submitted successfully! We will get back to you shortly."
      );
    } catch (error: any) {
      console.log(`Error submitting inquiry: ${error.message}`);
      window.alert(
        "There was an issue submitting your inquiry. Please try again later."
      );
    } finally {
      setLoading(false);
    }
    reset(); // Resets form after submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl shadow-md shadow-charcoal/20 p-4 *:text-charcoal *:text-sm space-y-4 h-auto"
    >
      <span className="font-medium capitalize">contact the owner</span>

      <div>
        <span className="font-medium capitalize">{name}</span>
        <p>{number}</p>
      </div>

      <div className="grid gap-2">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <input
              className="input"
              type="text"
              placeholder="Name"
              disabled={loading}
              {...register("name", {
                required: "Please enter your first and last name.",
              })}
            />

            {errors.name?.message && (
              <p className="errorMessage">{String(errors.name.message)}</p>
            )}
          </div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Phone"
              disabled={loading}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />

            {errors.phone?.message && (
              <p className="errorMessage">{String(errors.phone.message)}</p>
            )}
          </div>
        </div>

        <div>
          <input
            className="w-full input"
            type="email"
            placeholder="Email"
            disabled={loading}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email?.message && (
            <p className="errorMessage">{String(errors.email.message)}</p>
          )}
        </div>

        <div>
          <textarea
            title="Message"
            placeholder="Message"
            className="input"
            disabled={loading}
            value="I am interested in this hostel and would like to schedule a viewing. Please let me know when this would be possible."
            {...register("message", {
              required: "Please enter your message.",
            })}
          />

          {errors.message?.message && (
            <p className="errorMessage">{String(errors.message.message)}</p>
          )}
        </div>

        <button
          type="submit"
          className={`btn hover:bg-white hover-effects hover:ring-1 hover:ring-royal hover:text-royal disabled:opacity-50 disabled:pointer-events-none`}
          disabled={loading}
        >
          {loading ? (
            <ImSpinner9 className="animate-spin mx-auto" />
          ) : (
            "Check Availability"
          )}
        </button>

        <span className="text-xs text-charcoal/70">
          By reaching out about this property, you agree to our terms and
          conditions. The information provided is for reference only, and the
          availability of the hostel is subject to admin confirmation. We may
          follow up with you regarding your inquiry.
        </span>
      </div>
    </form>
  );
}
