<template>
    <div class="menu" :class="this.isOpened == true ? 'opened' : 'closed'">
        <div class="nav" style="user-select: none;" >
            <a class="logo" @click="scrollToTop()">
                <img src="https://static.igem.wiki/teams/4772/wiki/website-material/newest-logo.png" width="80"
                    height="48" />
            </a>
            <div class="spacer" @click="clickOuside()"></div>
            <div style="flex-grow：1"></div>
            <li class="Menu-list-item" @click="closeAll('#awards');scrollToTop();">
                Home
                <span class="Mask"><span>Home</span></span>
                <span class="Mask"><span>Home</span></span>
            </li>
            <li class="Menu-list-item" @click="closeAll('#Project'); handleSubMenu('#Project');">
                Project
                <span class="Mask"><span>Project</span></span>
                <span class="Mask"><span>Project</span></span>
            </li> 
            <SubMenu id="Project" selected="#Project" style="width:18rem; height: 65vh" className="submenu closed" :closeSubMenu="closeSubMenu">
                <li class="menu items"><a @click="pushRoute_1('/description')">Description</a></li>
                <li class="menu items"><a @click="pushRoute_1('/Engineering')">Engineering</a></li>
                <li class="menu items"><a @click="pushRoute_1('/wet-lab')">Wet Lab</a></li>
                <li class="menu items"><a @click="pushRoute_1('/dry-lab')">Dry Lab</a></li>
                <li class="menu items"><a @click="pushRoute_1('/results')">Results</a></li>
        
                <li class="menu items"><a @click="pushRoute_1('/parts')">Parts</a></li>
                <li class="menu items"><a @click="pushRoute_1('/contribution')">Contribution</a></li>
                
            </SubMenu>



            <li class="Menu-list-item" @click="closeAll('#public-engagement'); handleSubMenu('#public-engagement');">
                Public Engagement
                <span class="Mask"><span>Public Engagement</span></span>
                <span class="Mask"><span>Public Engagement</span></span>
            </li>
            <SubMenu id="public-engagement" selected="#public-engagement" style="height: 32vh" className="submenu closed"
                :closeSubMenu="closeSubMenu">
                <li class="menu items"><a @click="pushRoute_1('/sustainable')">Sustainable Development Goals</a></li>
                <li class="menu items"><a @click="pushRoute_1('/human-practices')">Human Practices</a></li>
                <li class="menu items"><a @click="pushRoute_1('/education')">Education</a></li>
            </SubMenu>


            <li class="Menu-list-item" @click="closeAll('#awards');handleSubMenu('#awards');">
                Awards
                <span class="Mask"><span>Awards</span></span>
                <span class="Mask"><span>Awards</span></span>
            </li>
           
            <SubMenu id="awards" selected="#awards" style="width:24rem; height: 32vh; right :-24.9rem;"  className="submenu closed" :closeSubMenu="closeSubMenu">
                <li class="menu items"><a @click="pushRoute_1('/plant')">Best Plant Synthetic Biology</a></li>
                <li class="menu items"><a @click="pushRoute_1('/sustainable')">Best Sustainable Development Impact</a></li>
                <li class="menu items"><a @click="pushRoute_1('/parts')">Best New Basic Part</a></li>
            </SubMenu>


            <li class="Menu-list-item" @click="closeAll('#team_');handleSubMenu('#team_');">
                Team
                <span class="Mask"><span>Team</span></span>
                <span class="Mask"><span>Team</span></span>
            </li>
            <SubMenu id="team_" selected="#team_"  style="width:18.5rem; height:50vh" className="submenu closed" :closeSubMenu="closeSubMenu">
                <li class="menu items"><a @click="pushRoute_1('/team')">Members</a></li>
                <li class="menu items"><a @click="pushRoute_1('/attributions')">Attributions</a></li>
                <li class="menu items"><a @click="pushRoute_1('/acknowledgement')">Acknowledgement</a></li>
                <li class="menu items"><a @click="pushRoute_1('/collaborations')">Collaborations</a></li>
                <li class="menu items"><a @click="pushRoute_1('/partnership')">Partnership</a></li>
                <li class="menu items"><a @click="pushRoute_1('/sponsors')">Sponsors</a></li>
            </SubMenu>





        <button class="burger hamburger hamburger--spin-r" :class="this.isOpened == true ? 'is-active' : ''" type="button"
            @click="handleMenu()">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <aside style="user-select: none;">
            <ul class="w-full flex flex-col text-white pt-2 ">
                <li class="menu items"><a @click="pushRoute('/')">Home</a></li>
              
                <li class="menu items">
                    <a @click="handleSubMenu('#project')">Project</a>
                    <span class="arrow-right"></span>
                </li>
                <li class="menu items">
                    <a @click="handleSubMenu('#public-engagement')">Public Engagement</a>
                    <span class="arrow-right"></span>
                </li>
                <li class="menu items">
                    <a @click="handleSubMenu('#awards')">Awards</a>
                    <span class="arrow-right"></span>
                </li>  
                <li class="menu items">
                    <a @click="handleSubMenu('#team_')">Team</a>
                    <span class="arrow-right"></span>
                </li>
            </ul>
        </aside>
        <SubMenu id="team_" selected="#team_" className="submenu closed" :closeSubMenu="closeSubMenu">
            <li class="menu items"><a @click="pushRoute('/team')">Members</a></li>  
            <li class="menu items"><a @click="pushRoute('/attributions')">Attributions</a></li>
            <li class="menu items"><a @click="pushRoute('/acknowledegment')">Acknowledgement</a></li> 
            <li class="menu items"><a @click="pushRoute('/collaborations')">Collaborations</a></li>
            <li class="menu items"><a @click="pushRoute('/partnership')">Partnership</a></li>
            <li class="menu items"><a @click="pushRoute('/sponsors')">Sponsors</a></li>
        </SubMenu>

        <SubMenu id="public-engagement" selected="#public-engagement" className="submenu closed"
            :closeSubMenu="closeSubMenu">
            <li class="menu items"><a @click="pushRoute('/sustainable')">Sustainable Development Goals</a></li>
            <li class="menu items"><a @click="pushRoute('/human-practices')">Human Practices</a></li>
            <li class="menu items"><a @click="pushRoute('/education')">Education</a></li>
        </SubMenu>
        <SubMenu id="project" selected="#project" className="submenu closed" :closeSubMenu="closeSubMenu">
            <li class="menu items"><a @click="pushRoute('/description')">Description</a></li>
            <li class="menu items"><a @click="pushRoute('/wet-lab')">Wet Lab</a></li>
            <li class="menu items"><a @click="pushRoute('/wet-lab')">Dry Lab</a></li>
            <li class="menu items"><a @click="pushRoute('/results')">Results</a></li>
            
            <li class="menu items"><a @click="pushRoute('/parts')">Parts</a></li>
            <li class="menu items"><a @click="pushRoute('/contribution')">Contribution</a></li>
            
        </SubMenu>
       
        
      

        <SubMenu id="awards" selected="#awards" className="submenu closed" :closeSubMenu="closeSubMenu">
             <li class="menu items"><a @click="pushRoute('/plant')">Best Plant Synthetic Biology</a></li>
             <li class="menu items"><a @click="pushRoute('/sustainable')">Best Sustainable Development Impact</a></li>
            <li class="menu items"><a @click="pushRoute('/parts')">Best New Basic Part</a></li>
        </SubMenu>
</div>
        <div class="content" @click="clickOuside()">
            <slot />
        </div>

        <aside style="user-select: none;">

        </aside>


    </div>
</template>
  
         
  
    
  
<script>
import SubMenu from './SubMenu.vue';
export default {
    data() {
        return {
            isOpened: false,
            subMenuId: "",
            options: {
                easing: [0.25, 0.1, 0.25, 1.0],
                force: true,
                cancelable: false,
                x: false,
                y: true
            },
        };
    },
    methods: {
        closeAll: function(id) {
    // 找到所有子菜单并将其关闭
    const subMenus = this.$el.querySelectorAll('.submenu.opened');
    subMenus.forEach(subMenu => {
        if (subMenu.id !== id) {
      subMenu.className = 'submenu closed';
    }
    });
  },
  
  // 其他方法...

        closeSubMenu: function () {
            this.$el.querySelector(this.subMenuId).className = "submenu closed";
            this.subMenuId = "";
        },
        openSubMenu: function (id) {
         
            this.subMenuId = id;
            this.$el.querySelector(this.subMenuId).className = "submenu opened";
            document.body.style.overflow = 'auto';
        },
        handleMenu: function () {
            this.isOpened = !this.isOpened;
            if (this.subMenuId != "") this.closeSubMenu();
            document.body.style.overflow = 'hidden';
        },
        handleSubMenu: function (id) {
            if (this.subMenuId == id) this.closeSubMenu();
            else this.openSubMenu(id);
            document.body.style.overflow = 'hidden';
        },
        clickOuside: function () {
            if (this.isOpened) {
                this.handleMenu();
                this.handleSubMenu();
            }
            this.closeSubMenu();
            document.body.style.overflow = 'auto';
        },
        pushRoute: function (to) {
            this.handleMenu();
            this.$router.push({ path: to });
            document.body.style.overflow = 'auto';
            this.closeSubMenu();
        },//可能与双层submenu相关
        pushRoute_1:function(to){
            this.$router.push({ path: to });
            document.body.style.overflow = 'auto';
            this.closeSubMenu();
        },
        scrollToTop: function () {
            this.$router.push({ path: "/" });
            this.$scrollTo("#top", 350, this.options);
        },
    },
    components: { SubMenu }
}
</script>
  
