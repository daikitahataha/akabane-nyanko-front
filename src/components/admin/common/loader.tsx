import { VFC } from 'react'
import {
    Dimmer,
    Loader,
    Image
} from 'semantic-ui-react'

const Loading: VFC = () => {
    return (
        <>
            <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src='/images/wireframe/short-paragraph.png' />
        </>
    )
}

export default Loading