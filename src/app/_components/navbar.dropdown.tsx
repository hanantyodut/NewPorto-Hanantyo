import { Dropdown, Flowbite } from "flowbite-react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaDiscord,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { dropItemTheme } from "../_libs/flowbite.theme";

export default function Contacts() {
  return (
    <Flowbite theme={{ theme: dropItemTheme }}>
      <Dropdown label={<IoCall />} arrowIcon={false}>
        {/* <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
          </span>
        </Dropdown.Header> */}
        <Dropdown.Item icon={FaLinkedin}>hanantyodian</Dropdown.Item>
        <Dropdown.Item icon={FaGithub}>hanantyodut</Dropdown.Item>
        <Dropdown.Item icon={FaWhatsappSquare}>+62 8111 2835 86</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item icon={FaDiscord}>axtonishing</Dropdown.Item>
        <Dropdown.Item icon={FaInstagramSquare}>hanantyodut</Dropdown.Item>
      </Dropdown>
    </Flowbite>
  );
}
