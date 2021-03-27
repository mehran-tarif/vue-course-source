const app = Vue.createApp({
	data() {
		return {
			courses: [
				{
					title: "Javascript",
					author: "Mehran Tarif",
					description: "I love javascript!",
					likes: 98,
					bookmark: true,
				},
				{
					title: "Vue.js",
					author: "Mehran Tarif",
					description: "I love vue.js!",
					likes: 10,
					bookmark: true,
				},
				{
					title: "React.js",
					author: "Sam",
					description: "I love react.js!",
					likes: 30,
					bookmark: true,
				},
			],
			filtered: false,
		}
	},
	methods: {
		
	},
	computed: {
		// isHot() {
		// 	if (this.likes >= 100) {
		// 		return "(HOT)"
		// 	}
		// }

		bookmarkedCourses() {
			return this.courses.filter(course => course.bookmark)
		}
	},
	watch: {
		
	}
}).mount("#app")