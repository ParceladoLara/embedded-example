import { loginWithSSO } from "@/services/login.service";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_appShell/lara")({
	beforeLoad: () => {
		const token = localStorage.getItem("@Clinicorp:token");
		if (!token) {
			throw redirect({ to: "/" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const [URL, setURL] = useState<string | null>(null);

	useEffect(() => {
		const companyDocument = "38710249000163";
		const ssoId = 1;

		loginWithSSO({ documentNumber: companyDocument, ssoId })
			.then((data) => {
				setURL(data.url);
			})
			.catch((err) => {
				console.error("Erro ao fazer login com SSO:", err);
			});
	}, []);

	if (!URL) return <p>Carregando...</p>;

	return <iframe title="Lara" width={"100%"} height={"100%"} src={URL} />;
}
