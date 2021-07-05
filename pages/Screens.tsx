import ComActivityIndicator from "./components/ComActivityIndicator"
import ComButton from "./components/ComButton"
import ComFlatList from "./components/ComFlatList"
import ComImage from "./components/ComImage"
import ComImageBackground from "./components/ComImageBackground"
import ComKeyboardAvoidingView from "./components/ComKeyboardAvoidingView"
import ComModal from "./components/ComModal"
import ComPressable from "./components/ComPressable"
import ComRefreshControl from "./components/ComRefreshControl"
import ComScrollView from "./components/ComScrollView"
import ComSectionList from "./components/ComSectionList"

interface Screen {
    name: string,
    component: any,
}

const Screens: Screen[] = [
    {
        name: "ActivityIndicator",
        component: ComActivityIndicator
    },
    {
        name: "Button",
        component: ComButton
    },
    {
        name: "FlatList",
        component: ComFlatList
    },
    {
        name: "Image",
        component: ComImage
    },
    {
        name: "ImageBackground",
        component: ComImageBackground
    },
    {
        name: "KeyboardAvoidingView",
        component: ComKeyboardAvoidingView
    },
    {
        name: "Modal",
        component: ComModal
    },
    {
        name: "Pressable",
        component: ComPressable
    },
    {
        name: "RefreshControl",
        component: ComRefreshControl
    },
    {
        name: "ScrollView",
        component: ComScrollView
    },
    {
        name: "SectionList",
        component: ComSectionList
    }
]

export default Screens