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
					image: "img/js.png",
				},
				{
					title: "Vue.js",
					author: "Mehran Tarif",
					description: "I love vue.js!",
					likes: 10,
					bookmark: false,
					image: "img/vue.png",
				},
				{
					title: "React.js",
					author: "Sam",
					description: "I love react.js!",
					likes: 30,
					bookmark: true,
					image: "img/react.png",
				},
			],
			filtered: false,
		}
	},
	methods: {
		isHot(likes) {
			if (likes >= 20) {
				return "<span class='badge badge-danger'>hot!</span>"
			}
		},
	},
	computed: {
		entiryCourses() {
			return (this.filtered) ? this.bookmarkedCourses : this.courses
		},

		bookmarkedCourses() {
			return this.courses.filter(course => course.bookmark)
		},
	},
	watch: {
		
	}
}).mount("#app")