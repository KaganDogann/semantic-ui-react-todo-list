import React, { useState } from "react";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import SıgnedIn from "./SignedIn";
import SıgnedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSıgnIn = () => {
    setIsAuthenticated(true);
  };
  const handleSıgnOut = () => {
    setIsAuthenticated(false);
  };
  return (
    <div>
      <Menu style={{marginBottom:"2rem"}} inverted> 
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SıgnedIn signOut={handleSıgnOut} />
            ) : (
              <SıgnedOut signIn={handleSıgnIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
