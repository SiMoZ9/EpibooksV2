import React from "react";

import {
    Button,
    Container,
} from "react-bootstrap";

const Welcome = () => {
    return (

        <main role="main" className="p-5 m-4 bg-img white-text rounded">
                <Container className="centering-text">
                    <h1 className="display-3">Benvenuto in Epibooks!</h1>
                    <p>
                        Dove la realtà incontra la fantasia
                    </p>
                    <p>
                        Scopri la nostra gamma di prodotti
                    </p>
                    <p>
                        <Button variant="primary" size="lg" role="button">
                            Scopri
                        </Button>
                    </p>
                </Container>
        </main>
    )
}

export default Welcome