import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, Box, Icon, Button, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Menu, Section, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="#171717"
			min-height="16px"
			padding="15px 0 15px 0"
			position="fixed"
			height="70px"
			top="00px"
			left="0px"
			right="0px"
			z-index="50"
		>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
				color="#fafafa"
				position="inherit"
			>
				<Text
					margin="0"
					md-margin="0px 0 20px 0"
					text-align="center"
					font="--logo2"
					color="#fafafa"
				>
					<Span
						font="--logo"
						text-align="center"
						color="#FAFAFA"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						VLASOV
						<br />
					</Span>
					PRODUCTION
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="#fafafa" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0) 0%,rgba(4, 8, 12, 0.18) 0%),--color-darkL2 url(https://images.unsplash.com/photo-1541322114925-104973c4cdd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1460&q=80) 50% 0%/cover no-repeat"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			height="100%"
			min-height="16px"
			top="0px"
			max-width="1920px"
			position="relative"
			z-index="1"
			max-height="1080px"
			bottom="0px"
		>
			<Stack text-align="center" align-items="center">
				<StackItem width="100%" lg-width="100%" align-self="center">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						as="h1"
						font="normal 600 370%/1 --fontFamily-googleRoboto"
						md-font="--headline2"
						text-align="center"
						align-self="center"
						color="#fafafa"
						display="flex"
						max-height="180px"
						max-width="758px"
						height="20%"
						width="100%"
						justify-content="center"
						position="static"
						margin="280px 0px 16px 0px"
					>
						СОЗДАЮ ФОТО И ВИДЕО
						<br />
						{" "}КОНТЕНТ ДЛЯ БРЕНДОВ И
						<br />
						ЛЮДЕЙ ПО ВСЕМУ МИРУ
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" color="#fafafa" padding="200px 0px 0px 0px">
				<Link href="#" font="--logo" color="#fafafa" text-decoration-line="initial">
					ПОДРОБНЕЕ
				</Link>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.37) 0%,rgba(0, 0, 0, 0.6) 21%),--color-darkL2 url(https://images.unsplash.com/photo-1535652316575-b38ecbf16de3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 20% 50%/cover no-repeat"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			height="100%"
			display="flex"
			position="relative"
			bottom="0px"
			z-index="11"
			max-height="1080px"
			max-width="1920px"
		>
			<Stack text-align="center">
				<StackItem width="100%" lg-width="100%" align-self="center">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						as="h1"
						font="normal 600 40px/1 --fontFamily-googleRoboto"
						md-font="--headline2"
						margin="20px 0 7px 0"
						text-align="center"
						align-self="center"
						color="#fafafa"
					>
						Режиссёр | Оператор | Фотограф
					</Text>
					<Text font="normal 400 20px/1.5 --fontFamily-googleRoboto" padding="40px 0px 0px 0px" margin="0 0px 16px 0px">
						Я предлагаю создание контента по всему миру.
						<br />
						{"  "}Реклама, промо видео, лайфстайл и экстрим,
						<br />
						спорт и события.
					</Text>
					<StackItem
						align-self="center"
						width="100%"
						padding="0px 20px 0px 20px"
						margin="40px 50px 0px 50px"
						height="40%"
						min-height="120px"
					>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								padding-bottom="100%"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/trozenko.png?v=2020-11-24T19:42:37.756Z) center/contain no-repeat"
								padding="0px 20px 0 0px"
								margin="0px 50px 0px 30px"
								height="90%"
								width="100%"
								min-height="120px"
							/>
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								padding-bottom="100%"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/man%20effxect.png?v=2020-11-24T19:42:37.753Z) center/contain no-repeat"
								margin="0px 50px 0px 30px"
								padding="0px 20px 0 0px"
								width="100%"
								height="90%"
								min-height="120px"
							/>
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/arctika.png?v=2020-11-24T19:42:37.751Z) center/contain no-repeat"
								width="100%"
								height="90%"
								min-height="120px"
								display="flex"
								margin="0px 0px 0px 30px"
								padding="0px 50px 0px 20px"
							/>
						</StackItem>
					</StackItem>
					<StackItem
						align-self="center"
						width="60%"
						height="100px"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 0px"
					>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/sterlic.png?v=2020-11-24T19:42:37.750Z) center/contain no-repeat"
								margin="20px 50px 0px 30px"
								padding="20px 20px 0 0px"
								width="100%"
								height="90%"
								min-height="120px"
							/>
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/antre.png?v=2020-11-24T19:42:37.752Z) center/contain no-repeat"
								margin="5px 50px 0px 30px"
								padding="0px 20px 0 0px"
								width="100%"
								height="90%"
								min-height="120px"
							/>
						</StackItem>
					</StackItem>
					<Box padding="0px 0px 50px 0px" />
				</StackItem>
			</Stack>
		</Section>
		<Section
			height="30px"
			width="100%"
			background="#171717"
			min-height="10px"
			position="relative"
			z-index="13"
		/>
		<Section
			height="150px"
			width="100%"
			position="relative"
			z-index="14"
			quarkly-title="подложка"
			bottom={0}
		>
			<Override slot="SectionContent" align-self="center" />
			<Text font="--headline1" color="#fafafa" text-align="center" align-self="center">
				МОИ ПРОЕКТЫ
			</Text>
		</Section>
		<Section
			height="150px"
			width="100%"
			background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(17, 17, 17, 0.6) 0%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1602526429747-ac387a91d43b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 75%/100% fixed border-box"
			z-index="2"
			quarkly-title="фон"
			position="relative"
			top="-200px"
		/>
		<Section
			text-align="center"
			sm-padding="40px 0"
			position="relative"
			background="#171717"
			padding="0px 0 24px 0"
			z-index="15"
			top="-200px"
		>
			<Box>
				<Text font="--lead" color="#fafafa" padding="30px 0px 0px 0px">
					Удаленное создание контента для продукции брендов.
					<br />
					Вы экономите на локации и модели, не тратите время на организацию съемки и получаете{" "}
					<br />
					готовый фото / видео контент для вашего бренда.
				</Text>
			</Box>
			<Stack width="100%" margin="40px 0 20px 0" justify-content="safe center">
				{"    "}
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 10px 0px 0px"
				>
					<Components.BrasletiVideo width="100%" height="100%" max-height="340px" sm-min-height="60px" />
				</Box>
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 0px 0px 10px"
				>
					<Components.ZavodVideo
						width="100%"
						lg-width="100%"
						height="100%"
						max-height="340px"
						margin="0px 0px 0px 0px"
					/>
				</Box>
				{"    "}
			</Stack>
			<Stack width="100%" margin="40px 0 20px 0" justify-content="safe center">
				{"    "}
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 10px 0px 0px"
				>
					<Components.ArctikaVideo />
				</Box>
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 0px 0px 10px"
				>
					<Components.AntreVideo />
				</Box>
				{"    "}
			</Stack>
			<Stack width="100%" margin="40px 0 20px 0" justify-content="safe center">
				{"    "}
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 10px 0px 0px"
				>
					<Components.MasterVideo />
				</Box>
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 0px 0px 10px"
				>
					<Components.CrimeaVideo />
				</Box>
				{"    "}
			</Stack>
		</Section>
		<Section
			height="10px"
			width="100%"
			background="#171717"
			min-height="10px"
			position="relative"
			z-index="16"
			top="-200px"
		/>
		<Section
			height="150px"
			width="100%"
			position="relative"
			z-index="17"
			background="rgba(0, 0, 0, 0)"
			quarkly-title="подложка"
			top="-200px"
		>
			<Override slot="SectionContent" align-self="center" />
		</Section>
		<Section
			height="150px"
			width="100%"
			background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(17, 17, 17, 0.6) 0%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 70%/contain fixed border-box"
			position="relative"
			z-index="2"
			quarkly-title="фон"
			top="-400px"
			padding="23px 0 24px 0"
		/>
		<Section
			padding="100px 0 0px 0"
			sm-padding="40px 0"
			position="relative"
			background="#171717"
			z-index="18"
			top="-400px"
			bottom="0px"
			height="auto"
			display="inline-table"
			min-height="2000px"
		>
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#fafafa"
				display="flex"
			>
				Удаленное создание контента{" "}
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 0 0"
				color="#fafafa"
				text-align="center"
				width="70%"
			>
				Удаленное создание контента для продукции брендов.
				<br />
				Вы экономите на локации и модели, не тратите время на организацию съемки и получаете готовый фото / видео контент для вашего бренда.
			</Text>
			<Button font="normal 500 20px/1.5 --fontFamily-sans" margin="20px" color="#171717" background="fafafa">
				Начнем!
			</Button>
			<Box
				width="100%"
				height="100%"
				text-align="center"
				display="inline-block"
				position="relative"
			>
				<Image
					width="24%"
					height="auto"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/23.jpg?v=2020-12-29T20:33:24.785Z"
					display="inline-block"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					vertical-align="top"
					position="absolute"
					right="13%"
					top="auto"
					bottom="-1495px"
					left="auto"
				/>
				<Image
					width="24%"
					height="auto"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%80%D0%BE%D0%BB%D0%B8%D0%BA09307.png?v=2020-12-29T20:34:36.375Z"
					display="inline-block"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					vertical-align="top"
					position="absolute"
					right="13%"
					top="auto"
					bottom="-960px"
					left="auto"
				/>
				<Image
					width="24%"
					height="auto"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/333.jpg?v=2020-12-29T21:02:36.217Z"
					display="inline-block"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					vertical-align="top"
					position="absolute"
					right="auto"
					top="0px"
					left="13%"
					bottom="-526px"
				/>
				<Image
					width="24%"
					height="auto"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/122.jpg?v=2020-12-29T21:02:33.574Z"
					display="inline-block"
					vertical-align="top"
					position="absolute"
					bottom="-320px"
					left="auto"
					right="13%"
					top="0px"
					object-fit="cover"
				/>
				<Image
					width="24%"
					height="auto"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/6.jpg?v=2020-12-29T20:33:17.492Z"
					margin="0 0px 0px 0px"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					flex-direction="row"
					vertical-align="top"
					display="inline-block"
					text-align="center"
					position="absolute"
					left="13%"
					right="auto"
					top="auto"
					bottom="-1646px"
				/>
				<Image
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%80%D0%BE%D0%BB%D0%B8%D0%BA09308.png?v=2020-12-29T20:34:41.366Z"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					flex-direction="row"
					vertical-align="top"
					display="block"
					text-align="center"
					position="fixed"
					right="auto"
					top="auto"
					width="24%"
					height="auto"
					bottom="1689px"
					left="13%"
					z-index="19"
				/>
				<Image
					width="24%"
					height="523.359px"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/24.jpg?v=2020-12-29T20:33:29.979Z"
					margin="0 0px 0px 0px"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					flex-direction="row"
					vertical-align="top"
					display="inline-block"
					text-align="center"
					position="absolute"
					left="38%"
					right="38%"
					top="auto"
					bottom="-1535px"
				/>
				<Image
					width="24%"
					height="523.359px"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D1%80%D0%BE%D0%BB%D0%B8%D0%BA09319.png?v=2020-12-29T20:34:45.273Z"
					margin="0 0px 0px 0px"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					flex-direction="row"
					vertical-align="top"
					display="inline-block"
					text-align="center"
					position="absolute"
					left="38%"
					right="38%"
					top="auto"
					bottom="-1000px"
				/>
				<Image
					width="24%"
					height="auto"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/4444.jpg?v=2020-12-29T21:02:33.567Z"
					margin="0 0px 0px 0px"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					flex-direction="row"
					vertical-align="top"
					display="inline-block"
					text-align="center"
					position="absolute"
					left="38%"
					right="38%"
					top="0px"
					bottom="-352px"
				/>
			</Box>
			<Box />
		</Section>
		<Section
			background="#171717"
			color="--dark"
			padding="64px 0 64px 0"
			position="static"
			z-index="19"
			top="-100px"
		>
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--greyD1"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Контакты
					</Text>
					<Text
						font="normal 600 50px/1 --fontFamily-googleRoboto"
						max-width="500px"
						margin="10px 0 0 0"
						width="100%"
						color="#fafafa"
					>
						Для{" "}
						<br />
						идей,
						<br />
						коллабов,
						<br />
						предложений
						<br />
						{" "}или просто так
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" border-color="#ffffff" border-width="2px" border-style="solid" />
					<Text color="#fafafa">
						форма
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="#171717"
			padding="10px 0 10px 0"
			sm-padding="40px 0"
			position="static"
			z-index="19"
			top="-400px"
		>
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});