export interface LoginResponse {
  url: string;
}

interface LoginWithSSOProps {
  ssoId?: number;
  documentNumber?: string;
  cellphone?: string;
  companyName?: string;
  contactName?: string;
  email?: string;
}

export async function loginWithSSO(
  data: LoginWithSSOProps
): Promise<LoginResponse> {
  // http://localhost:3000/login
  const response = await fetch(
    "https://991xlcp5-3000.brs.devtunnels.ms/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`Erro no login: ${response.status}`);
  }

  return response.json();
}
