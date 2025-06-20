import connectDB from "@/lib/connectDB";
import User from "@/models/user.model";

export async function POST(request) {
  await connectDB();
  const { name, email, password } = await request.json();

  if (
    [name, email, password].some(
      (value) => value === undefined || value?.trim() === ""
    )
  ) {
    return Response.json(
      { error: "All Fields are required." },
      {
        status: 417,
      }
    );
  }

  const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  if (!validateEmail(email)) {
    return Response.json(
      { error: "Please Enter Valid E-mail Address." },
      {
        status: 406,
      }
    );
  }

  const existedUser = await User.findOne({
    email,
  });

  if (existedUser) {
    return Response.json(
      { error: "User with E-mail already Exists." },
      {
        status: 409,
      }
    );
  }

  const register = await User.create({ name, email, password });

  return Response.json(
    {
      name: register.name,
      email: register.email,
      createdAt: register.createdAt,
    },
    {
      status: 201,
    }
  );
}
