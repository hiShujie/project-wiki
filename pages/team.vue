<template>
    <div style="overflow-x: hidden">
        <Header title="Team"></Header>

        <div class="bg team" style="background: url('https://static.igem.wiki/teams/4772/wiki/website-material/team.png') center center no-repeat; background-size: cover;">
          <h1 class="head-title">Our Team</h1>
        </div>

        <section class="container members">
            <h2 class="main-title text-center mb-5">Team Members</h2>
            <div class="row">
                <template v-for="member in memberList" v-if="memberList !== null">
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                            <figure class="effect">
                                <img :src="getLink(member.id)" alt="img18"/>
                                <figcaption>
                                    <h3 class="name">{{member.name}}</h3>
                                    <template v-for="category in member.categories">
                                        <span class="role team-leader" v-if="category === 'Team Leader'">{{category}}</span>
                                        <span class="role web-developer" v-if="category === 'Web Developer'">{{category}}</span>
                                        <span class="role wet-lab" v-if="category === 'Wet Lab'">{{category}}</span>
                                        <span class="role dry-lab" v-if="category === 'Dry Lab'">{{category}}</span>
                                        <span class="role graphic-design" v-if="category === 'Graphic Design'">{{category}}</span>
                                        <span class="role fundraiser" v-if="category === 'Fundraiser'">{{category}}</span>
                                        <span class="role entrepreneurship" v-if="category === 'Entrepreneurship'">{{category}}</span>
                                        <span class="role human-practices" v-if="category === 'Human Practices'">{{category}}</span>
                                        <span class="role public-relations" v-if="category === 'Public Relations'">{{category}}</span>
                                    </template>
                                    <div>
                                    <p style="align-self:center;text-align:center;margin-bottom:110px;font-size:1.8vh">
                                       <span>{{member.motto}}</span> 
                                    </p></div>
                                    <div>
                                    <p class="member" style="font-size:1.8vh">
                                        <a :href="member.mail" v-if="member.mail != ''">Mail</a>

                                        <br>
                                        {{member.title}}
                                    </p></div>

                                  

                                    <a>View more</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </template>
            </div>
         <br>



         
            <h2 class="main-title text-center mb-5" style="margin-top: 30px;">Supervisors</h2>
            <div class="row">
                <template v-for="supervisor in superList" v-if="superList !== null">
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div data-aos="zoom-out" data-aos-duration="300" data-aos-offset="100">
                            <figure class="effect">
                                <img :src="getLink(supervisor.id)" alt="img18"/>
                                <figcaption>
                                    <h3 class="name">{{supervisor.name}}</h3>
                                    <template v-for="category in supervisor.categories">
                                        <span class="role team-leader" v-if="category === 'Professor'">{{category}}</span>
                                        <span class="role fundraiser" v-if="category === 'Fundraiser'">{{category}}</span>
                                        <span class="role entrepreneurship" v-if="category === 'Entrepreneurship'">{{category}}</span>
                                        <span class="role lab-instructor" v-if="category === 'Lab Instructor'">{{category}}</span>
                                        <span class="role entrepreneurship" v-if="category === 'Team Advisor'">{{category}}</span>
                                    </template>
                                    <p class="member" style="font-size:2vh">
                                        <br>
                                        {{supervisor.title}}
                                    </p>
                                    <a>View more</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </div>
</template>

<script>
import fetch from 'node-fetch';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    data() {
        return {
            memberList: null,
            superList: null
        };
    },
    mounted() {
        fetch("https://static.igem.wiki/teams/4772/wiki/website-material/member/member2023.json")
          .then(res => res.json())
          .then(data => this.memberList = data)
          .catch(err => { throw err });
        fetch("https://static.igem.wiki/teams/4772/wiki/website-material/member/supervisor2023.json")
          .then(res => res.json())
          .then(data => this.superList = data)
          .catch(err => { throw err });
        AOS.init({});
    },
    methods: {
        getLink: function(id) {
            return "https://static.igem.wiki/teams/4772/wiki/website-material/member/"+id+".png";
        },
    }
}
</script>
