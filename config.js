// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Azhrael',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Google',
			icon: 'search',
			link: 'https://google.com/',
		},
		{
			id: '2',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '3',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/hxndsky',
		},
		{
			id: '4',
			name: 'Instagram',
			icon: 'instagram',
			link: 'https://instagram.com/',
		},
		{
			id: '5',
			name: 'Pinterest',
			icon: 'flame',
			link: 'https://pinterest.com',
		},
		{
			id: '6',
			name: 'Gmail',
			icon: 'mail',
			link: 'https://mail.google.com/mail/u/0/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Deepseek',
			icon: 'bot',
			link: 'https://chat.deepseek.com/',
		},
		{
			id: '2',
			name: 'Gemini',
			icon: 'bot-message-square',
			link: 'https://gemini.google.com/app?utm_source=app_launcher&utm_medium=owned&utm_campaign=base_all',
		},
		{
			id: '3',
			name: 'ChatGPT',
			icon: 'bug-play',
			link: 'https://chatgpt.com/',
		},
		{
			id: '4',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '5',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '6',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
	],
};
