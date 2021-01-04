import React from "react";
import theme from "theme";
import { Theme, Link, Span, Box, Hr, Text, Icon, Strong, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section, Override, StackItem, Stack } from "@quarkly/components";
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
		<Components.Anchor0 height="0px" opacity="0" />
		<Section
			background="#fafafa"
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
				color="#171717"
				position="inherit"
			>
				<Link
					href="#top"
					margin="0"
					md-margin="0px 0 0px 0"
					text-align="center"
					font="--logo2"
					color="#171717"
					lg-display="block"
					md-text-align="left"
					sm-font="normal small-caps 400 12px/1.3 Roboto, sans-serif"
					sm-text-align="center"
					text-decoration-line="initial"
					hover-color="#013615"
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
						data-q-widget-type="PRIMITIVE"
						sm-font="normal 400 21px Roboto, sans-serif"
						sm-text-align="center"
					>
						<Span color="#171717">
							VLASOV
						</Span>
						<br />
					</Span>
					PRODUCTION
				</Link>
				<Box>
					<Link
						href="#aboutme"
						text-align="right"
						font="--base"
						color="#171717"
						text-decoration-line="initial"
						visited-color="#171717"
						hover-color="#013615"
						active-color="#013615"
					>
						ОБО МНЕ
					</Link>
					<Link
						href="#projects"
						text-align="right"
						color="#171717"
						text-decoration-line="initial"
						font="--base"
						padding="0px 15px 0px 15px"
						hover-color="#013615"
						active-color="#013615"
					>
						ПРОЕКТЫ
					</Link>
					<Link
						href="#contact"
						color="#171717"
						font="--base"
						text-decoration-line="initial"
						hover-color="#013615"
						active-color="#013615"
					>
						КОНТАКТЫ
					</Link>
				</Box>
			</Box>
		</Section>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0) 0%,rgba(4, 8, 12, 0.18) 0%),--color-darkL2 url(https://images.unsplash.com/photo-1609611336379-479e268780c6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 0%/cover no-repeat"
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
				<StackItem width="100%" lg-width="100%" align-self="center" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					<Hr height="50px" opacity="0" />
					<Text
						as="h1"
						font="normal 600 370%/1 --fontFamily-googleRoboto"
						md-font="normal 600 38px/1 --fontFamily-googleRoboto"
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
						lg-font="normal 600 48px/1 --fontFamily-googleRoboto"
						sm-font="normal 600 26px/1 --fontFamily-googleRoboto"
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
				<Link
					href="#aboutme"
					font="--logo"
					color="#fafafa"
					text-decoration-line="initial"
					sm-font="normal 400 16px Roboto, sans-serif"
				>
					ПОДРОБНЕЕ
				</Link>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
				<Components.Anchor1 display="block" opacity="0" height="1px" />
			</Box>
			<Hr height="60px" opacity="0" />
		</Section>
		<Section
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1563030611-25a50eef4f61?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 23%/cover no-repeat"
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
			<Hr height="100px" opacity="0" />
			<Stack text-align="center">
				<StackItem width="100%" lg-width="100%" align-self="center">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						as="h1"
						font="normal 600 40px/1 --fontFamily-googleRoboto"
						md-font="normal 600 38px/1 --fontFamily-googleRoboto"
						margin="0px 0 7px 0"
						text-align="center"
						align-self="center"
						color="#fafafa"
						sm-font="normal 600 20px/1 --fontFamily-googleRoboto"
					>
						Режиссёр | Оператор | Фотограф
					</Text>
					<Text font="normal 300 20px/1.5 --fontFamily-sans" padding="40px 0px 0px 0px" margin="0 0px 16px 0px" sm-font="normal 400 14px/1.5 --fontFamily-googleRoboto">
						Я предлагаю создание контента по всему миру.
						<br />
						{"  "}Реклама, промо видео, лайфстайл и экстрим,
						<br />
						спорт и события.
					</Text>
					<StackItem
						align-self="center"
						width="100%"
						padding="0px 0px 0px 0px"
						margin="40px 0px 0px 0px"
						height="40%"
						min-height="120px"
						md-display="flex"
						md-align-items="center"
					>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="33%"
							sm-width="100%"
							lg-margin="0px 20px 0px 0px"
						>
							<Override
								slot="StackItemContent"
								padding-bottom="100%"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/trozenko.png?v=2020-11-24T19:42:37.756Z) center/contain no-repeat"
								height="90%"
								width="100%"
								min-height="120px"
								padding="0px 20px 0 0px"
							/>
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="33%" sm-width="100%">
							<Override
								slot="StackItemContent"
								padding-bottom="100%"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/man%20effxect.png?v=2020-11-24T19:42:37.753Z) center/contain no-repeat"
								padding="0px 20px 0 0px"
								width="100%"
								height="90%"
								min-height="120px"
							/>
						</StackItem>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="33%"
							sm-width="100%"
							lg-margin="0px 0px 0px 20px"
						>
							<Override
								slot="StackItemContent"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/arctika.png?v=2020-11-24T19:42:37.751Z) center/contain no-repeat"
								width="100%"
								height="90%"
								min-height="120px"
								display="flex"
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
						md-display="flex"
					>
						<StackItem width="50%" md-width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/sterlic.png?v=2020-11-24T19:42:37.750Z) center/contain no-repeat"
								padding="0px 20px 0 0px"
								width="100%"
								height="90%"
								min-height="120px"
								margin="20px 0px 0px 0px"
								sm-margin="5px 0px 0px 0px"
							/>
						</StackItem>
						<StackItem width="50%" md-width="50%" sm-width="100%">
							<Override
								slot="StackItemContent"
								background="url(https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/antre.png?v=2020-11-24T19:42:37.752Z) center/contain no-repeat"
								padding="0px 20px 0 0px"
								width="100%"
								height="90%"
								min-height="120px"
								margin="5px 0px 0px 0px"
								sm-margin="0 0px 0px 0px"
							/>
						</StackItem>
					</StackItem>
				</StackItem>
			</Stack>
			<Components.Anchor2 height="1px" opacity="0" />
			<Hr height="100px" opacity="0" />
		</Section>
		<Section
			height="30px"
			width="100%"
			background="#fafafa"
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
			background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(17, 17, 17, 0.6) 0%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1533746873999-216ac24b7e5c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 75%/100% fixed border-box"
			z-index="2"
			quarkly-title="фон"
			position="relative"
			top="-200px"
		/>
		<Section
			text-align="center"
			sm-padding="40px 0"
			position="relative"
			background="#fafafa"
			padding="0px 0 24px 0"
			z-index="15"
			top="-200px"
		>
			<Box>
				<Text
					font="--lead"
					color="#171717"
					padding="30px 0px 0px 0px"
					sm-font="normal 300 17px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					border-color="#171717"
				>
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
					sm-padding="0px 0 0px 0px"
				>
					<Components.BrasletiVideo width="100%" height="100%" max-height="340px" />
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
			<Stack width="100%" margin="40px 0 20px 0" justify-content="safe center" sm-margin="20px 0 20px 0">
				{"    "}
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 10px 0px 0px"
					sm-padding="0px 0 0px 0px"
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
			<Stack width="100%" margin="40px 0 20px 0" justify-content="safe center" sm-margin="20px 0 20px 0">
				{"    "}
				<Box
					width="48%"
					height="100%"
					min-height="100px"
					max-height="350px"
					padding="0px 10px 0px 0px"
					sm-padding="0px 0 0px 0px"
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
			height="150px"
			width="100%"
			position="relative"
			z-index="17"
			background="rgba(0, 0, 0, 0)"
			quarkly-title="подложка"
			top="-200px"
		>
			<Override slot="SectionContent" align-self="center" />
			<Text font="--headline1" color="#fafafa" text-align="center" align-self="center">
				ТАРИФЫ
			</Text>
		</Section>
		<Section
			height="150px"
			width="100%"
			background="linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(17, 17, 17, 0.6) 0%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 20%/contain fixed border-box"
			position="relative"
			z-index="2"
			quarkly-title="фон"
			top="-400px"
			padding="23px 0 23px 0"
		/>
		<Section
			padding="40px 0 0px 0"
			sm-padding="40px 0"
			position="relative"
			background="#fafafa"
			z-index="18"
			top="-400px"
			bottom="0px"
			display="inline-table"
			width="100%"
		>
			<Override slot="SectionContent" align-items="center" />
			<Stack align-items="center">
				<StackItem width="33.33%" md-width="100%" position="relative" lg-margin="0px 0px 0 0px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						as="p"
						font="normal 400 32px/1.5 --fontFamily-googleRoboto"
						color="#171717"
						text-align="center"
						sm-font="normal 500 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						Стартовый пакет
					</Text>
					<Text
						as="p"
						font="--lead"
						color="#171717"
						text-align="center"
						sm-font="normal 300 18px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						6 отредактированных фотографий{" "}
						<br />
						Промо-видео на 
25-45 секунд
						<br />
						(версии Instagram + YouTube)
						<br />
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Цена от 5600 рублей
							<br />
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%" position="static">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						as="p"
						font="normal 400 32px/1.5 --fontFamily-googleRoboto"
						color="#171717"
						text-align="center"
						sm-font="normal 500 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						Стандартный пакет{" "}
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="5px 0 0 0"
						color="#171717"
						text-align="center"
						sm-font="normal 300 18px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						12 отредактированных фотографий
						<br />
						Промо-видео на 
25-45 секунд{" "}
						<br />
						(версии Instagram + YouTube)
						<br />
						Промо ролик Instagram stories{" "}
						<br />
						(15 cекунд)
						<br />
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Цена от 7200 рублей
						</Strong>
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						as="p"
						font="normal 400 32px/1.5 --fontFamily-googleRoboto"
						color="#171717"
						text-align="center"
						sm-font="normal 500 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						Максимальный пакет{" "}
					</Text>
					<Text
						as="p"
						font="--lead"
						margin="5px 0 0 0"
						color="#171717"
						text-align="center"
						sm-font="normal 300 18px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					>
						18 отредактированных фотографий
						<br />
						Промо-видео на 1 минуту{" "}
						<br />
						(версии Instagram + YouTube)
						<br />
						Промо ролик Instagram stories{" "}
						<br />
						(15 секунд)
						<br />
						<Strong
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Цена от 10400 рублей
						</Strong>
					</Text>
				</StackItem>
			</Stack>
			<Box
				width="100%"
				height="100%"
				text-align="center"
				display="inline-block"
				position="relative"
				margin="40px 0px 0px 0px"
			>
				<Image
					width="70%"
					height="auto"
					src="https://uploads.quarkly.io/5fbd4fdbb83a2f001f2e3076/images/photos.png?v=2021-01-04T13:29:08.811Z"
					display="inline-block"
					object-fit="cover"
					background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box"
					loading="lazy"
					vertical-align="top"
					position="relative"
					top={0}
					bottom={0}
				/>
				<Components.Anchor3 opacity="0" height="1px" />
			</Box>
			<Box />
		</Section>
		<Section
			background="#fafafa"
			color="#fafafa"
			padding="64px 0 30px 0"
			position="static"
			z-index="19"
			top="-100px"
			margin="-400px 0 0 0"
			border-color="#fafafa"
		>
			<Stack>
				<StackItem width="45%" lg-width="45%" sm-width="100%" margin="0px 0px 0px 40px">
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
						color="#171717"
						md-font="normal 600 38px/1 --fontFamily-googleRoboto"
					>
						Для{" "}
						<br />
						идей,{" "}
						<br />
						коллабов,{" "}
						<br />
						предложений{" "}
						<br />
						или просто так
					</Text>
				</StackItem>
				<Box width="50%">
					<Link
						font="normal 500 18px/1.5 --fontFamily-googleRoboto"
						color="#171717"
						border-width="2px"
						border-style="solid"
						border-color="#171717"
						width="55%"
						height="10%"
						display="flex"
						text-align="center"
						text-decoration-line="initial"
						align-items="center"
						href="https://t.me/VlasovProd"
						padding="8px 24px 8px 24px"
						justify-content="center"
						margin="17% 0px 0px 0px"
					>
						Написать в Telegram
					</Link>
					<Link
						font="normal 500 18px/1.5 --fontFamily-googleRoboto"
						color="#171717"
						border-width="2px"
						border-style="solid"
						border-color="#171717"
						width="55%"
						height="10%"
						display="flex"
						text-align="center"
						text-decoration-line="initial"
						align-items="center"
						href="https://wa.me/79964041915"
						padding="8px 24px 8px 24px"
						justify-content="center"
						margin="15px 0px 0px 0px"
					>
						Написать в Whatsapp
					</Link>
				</Box>
			</Stack>
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