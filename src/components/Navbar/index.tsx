import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import { RiHome7Fill } from "react-icons/ri";
import { TbUserSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
	return (
		<Box p="4">
			<Heading color="#1ED760">Circle</Heading>

			<HStack mt="5" color="white">
				<RiHome7Fill size={24} />
				<Text>Home</Text>
			</HStack>

			<HStack mt="5" color="white">
				<TbUserSearch size={24} />
				<Text>Search</Text>
			</HStack>

			<HStack mt="5" color="white">
				<AiOutlineHeart size={24} />
				<Text>Follows</Text>
			</HStack>

			<HStack mt="5" color="white">
				<CgProfile size={24} />
				<Text>Profile</Text>
			</HStack>

			<Button
				bg="#1ED760"
				color={"white"}
				size="sm"
				w="full"
				rounded="full"
				mt="3">
				Create Post
			</Button>
		</Box>
	);
}
