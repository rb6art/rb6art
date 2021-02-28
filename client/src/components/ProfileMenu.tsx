import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import SignoutButton from './auth/buttons/SignoutButton'

const ProfileMenu = () => {
  return (
    <Menu>
      <MenuButton>Profile</MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <MenuItem> My Accout</MenuItem>
          <MenuItem>
            <SignoutButton />
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default ProfileMenu
