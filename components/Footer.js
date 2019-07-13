import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
​
export default class FooterTabsExample extends Component {
    render() {
        return (
            <Container>
                <Content />

                <Footer >
                    <FooterTab>
                        <Button>
                            Apps
                            <Icon name='android-apps-outline' />
                        </Button>
                        <Button>
                            Camera
                            <Icon name='android-camera-outline' />
                        </Button>
                        <Button active>
                            Navigate
                            <Icon name='android-compass' />
                        </Button>
                        <Button>
                            Contact
                            <Icon name='android-contact-outline' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}