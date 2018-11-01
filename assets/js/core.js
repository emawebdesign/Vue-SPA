const Home = { 
    template: '<div class="container"><h1 class="title">{{config.title}}</h1><p>{{config.description}}</p></div>' 
}

const About = { 
    template: '<div class="container"><p class="mb-20">{{config.about}}</p><p><a href="https://github.com/emawebdesign/Vue-SPA">Link</a></p></div>' 
}

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About }
];

const router = new VueRouter({
    routes
});

var VueStardust = new Vue({
    router,
    el: '#app',
    data: {
        config: new Object
    },
    created: function() {

        this.config = config;
        
    }
});