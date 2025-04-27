/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function loginUserAction(formData: FormData): Promise<any> {
  const inputData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { email, password } = inputData;

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!result.success) {
      return {
        success: false,
        message: result.message || "Erro ao fazer login.",
      };
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Erro no loginAction:", error);
    return { success: false, message: "Erro inesperado" };
  }
}
