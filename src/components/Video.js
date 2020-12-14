import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = <div>
	<iframe
		src="https://player.vimeo.com/video/404273433"
		width="640"
		height="360"
		frameborder="0"
		allow="autoplay; fullscreen"
		allowfullscreen
	></iframe>
	<p>
		<a href="https://vimeo.com/404273433">
			Men's Effect Accessories | МУЖСКИЕ БРАСЛЕТЫ
		</a>
		 from 
		<a href="https://vimeo.com/vlasovprod">
			VLASOV PRODUCTION
		</a>
		 on 
		<a href="https://vimeo.com">
			Vimeo
		</a>
		.
	</p>
</div>;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});