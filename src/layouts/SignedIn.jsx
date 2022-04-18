import React from "react";
import { Divider, Dropdown, Menu,Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <Menu.Item>
        <Image avatar spaced="right" src="https://picsum.photos/id/237/200/300" />
      <Dropdown pointing="top right" text="Kağan">
        <Dropdown.Menu>
          <Dropdown.Item text="Bilgilerim" icon="info" />
          <Divider fitted></Divider>
          <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          Çıkış
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
}
