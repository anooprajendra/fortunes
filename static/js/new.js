/*
 * Fortune Cookie
 */

const fortunediv = document.getElementById("fortune");

const baseurl = `${document.baseURI}fortune`;

const getFortune = async () => {
	const url = () => {
		const o = document
			.getElementById("offensive")
			.getAttribute("data-state");
		if (o != null) {
			return `${baseurl}?off=true`;
		}
		return baseurl;
	};
	const resp = await fetch(url(), {
		method: "GET",
		headers: { Accept: "application/json" },
	});
	const j = await resp.json();
	updateFortune(j.fortune);
};

const updateFortune = (f) => {
	const t_out = Math.max(5000, Math.ceil(f.length / 20 ) * 1000);
	const fortunebox = document.getElementById("fortunebox");
	const s = f
		.trim()
		.replaceAll("\n", "<br/>")
		.replaceAll(" ", "&nbsp;")
		.replaceAll("\t", "&nbsp;".repeat(8));
	fortunebox.innerHTML = s;
	setTimeout(getFortune, t_out)
};

const toggleOffensive = () => {
	const o = document.getElementById("offensive");
	o.toggleAttribute("data-state");
	console.log(o);
};

const bo = document.getElementById("offensive");
bo.onclick = toggleOffensive;
document.onload = getFortune();

