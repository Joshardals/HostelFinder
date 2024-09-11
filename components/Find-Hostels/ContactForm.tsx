import { FieldValues, useForm } from "react-hook-form";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Form Data Submitted: ", data);
    // Send the data via nodemailer or API
    reset(); // Resets form after submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl shadow-md shadow-charcoal/20 p-4 *:text-charcoal *:text-sm space-y-4"
    >
      <span className="font-medium text-sm capitalize">contact the owner</span>

      <div>
        <span className="font-medium capitalize">John Okoro</span>
        <p>0806 123 4567</p>
      </div>

      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              className="input"
              type="text"
              placeholder="Name"
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
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email?.message && (
            <p className="text-red-600">{String(errors.email.message)}</p>
          )}
        </div>

        <div>
          <textarea
            title="Message"
            placeholder="Message"
            className="input"
            {...register("message", {
              required: "Please enter your message.",
            })}
          />
          {errors.message?.message && (
            <p className="text-red-600">{String(errors.message.message)}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn hover:bg-white hover-effects hover:ring-1 hover:ring-royal hover:text-royal"
        >
          Check Availability
        </button>
      </div>
    </form>
  );
}
