export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            screenA: undefined;
            screenB: {name: string;};
        }
    }
}

type StackParamList = {
    screenA:undefined;
    screenB:undefined;
}


type StackProps = NativeStackScreenProps<StackParamList, 'screenA'>

type Props = {
    routes: StackProps
}
