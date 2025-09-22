import MainNav from '@/components/MainNav.vue'
import NamedView from '@/components/NamedView.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import RightNav from '@/components/RightNav.vue'
import AppHeader from '@/components/AppHeader.vue'
import UserSettings from '@/components/UserSettings.vue'
import { components } from 'vuetify/dist/vuetify.js'
import UserEmailSubscriptions from '@/components/UserEmailSubscriptions.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserProfilePreview from '@/components/UserProfilePreview.vue'

const routes = [{
    path:'/named',
    component: NamedView,
    children: [{
        path:'',
        components: {
            default: ProfilePage,
            LeftSidebar: MainNav,
            RightSidebar: RightNav
        }
    }]
}, {
    path:'/settings',
    component: UserSettings,
    children: [{
        path:'emails',
        components: {
            default:UserEmailSubscriptions
        }
    }, {
        path: 'profile',
        components: {
            default:UserProfile,
            helper: UserProfilePreview
        }
    }] 
}]


export default routes