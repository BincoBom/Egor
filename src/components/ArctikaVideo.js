import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<div>
<iframe src="https://player.vimeo.com/video/390741579?color=ff9933&byline=0" width="100%" height="300" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;

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