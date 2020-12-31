import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<div>
<a href="#faq-1">Question 1</a>
<a href="#faq-2">Question 2</a>
<a href="#faq-3">Question 3</a>

<h3 id="faq-1">Question 1</h3>
<h3 id="faq-2">Question 2</h3>
<h3 id="fa1-3">Question 3</h3>
</div>`;

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