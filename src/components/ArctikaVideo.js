import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<div style="padding:55.19% 0 0 0;position:relative;">
<iframe src="https://www.youtube.com/embed/w2WQHC3CeN4" 
style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe></div>`;

const ArctikaVideo = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(ArctikaVideo)({
	name: "CrimeaVideo",
	normalize: true,
	mixins: true
});