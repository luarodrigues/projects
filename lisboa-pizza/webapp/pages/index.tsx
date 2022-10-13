import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ReactNode } from "react";
import {
  Box,
  Badge,
  Image,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import {
  StarIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";

var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keywDwYT2D1S365PY",
}).base("appzPiDHqIhgq35ft");

/* const Links = [
  "Dashboard",
  "Projects",
  "Team",
];

const NavLink = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue(
        "gray.200",
        "gray.700"
      ),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

function Simple() {
  const { isOpen, onOpen, onClose } =
    useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue(
          "gray.100",
          "gray.900"
        )}
        px={4}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={
            "space-between"
          }
        >
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon />
              ) : (
                <HamburgerIcon />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={
              isOpen ? onClose : onOpen
            }
          />
          <HStack
            spacing={8}
            alignItems={"center"}
          >
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{
                base: "none",
                md: "flex",
              }}
            >
              {Links.map((link) => (
                <NavLink key={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  Link 1
                </MenuItem>
                <MenuItem>
                  Link 2
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  Link 3
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
          >
            <Stack
              as={"nav"}
              spacing={4}
            >
              {Links.map((link) => (
                <NavLink key={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
} */
const Restaurant = ({
  name,
  image,
  alt,
  notes,
}) => {
  const property = {
    rating: 5,
  };

  return (
    <Box
      p="6px"
      maxW="sm"
      overflow="hidden"
      display="block"
      alignContent="space-around"
      justifyContent="center"
    >
      <Link
        mt="1"
        border="1px solid #000"
        borderRadius="lg"
        fontWeight="semilight"
        fontSize="30px"
        lineHeight="tight"
        noOfLines={1}
        textAlign="center"
        color="#000"
        boxShadow="0px 8px 8px 0 rgb(37 39 8 / 8%)"
        transition="all 220ms ease-in-out"
        _hover={{
          textDecoration: "none",
          bg: "black",
          color: "white",
        }}
        href={"#"}
      >
        {name}
      </Link>

      <Box
        p="3.5"
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <Image
          src={image}
          alt={alt}
          height="200px"
          maxH="100%"
          width="250px"
          maxW="100%"
        />
      </Box>
      <Box p="0">
        <Box
          display="block"
          alignItems="center"
        >
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="12px"
            textTransform="uppercase"
            textAlign="center"
          >
            Margherita &bull; Special
            pizza
          </Box>
        </Box>

        <Box
          display="block"
          textAlign="center"
          fontSize="25px"
        >
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={
                  i < property.rating
                    ? "rgb(247, 192, 0)"
                    : "rgb(223, 223, 223)"
                }
              />
            ))}
        </Box>

        <Box
          display="block"
          color="gray.500"
          fontWeight="light"
          fontStyle="italic"
          letterSpacing="wide"
          fontSize="12px"
          textAlign="center"
        >
          ''{notes}''
        </Box>
      </Box>
    </Box>
  );
};

const Home: NextPage = ({
  restaurantes,
}) => {
  console.log(restaurantes);
  return (
    <Box padding="0" margin="35px">
      <Box
        padding="35px"
        margin="35px"
        mt="1"
        fontWeight="semibold"
        fontSize="60px"
        lineHeight="tight"
        noOfLines={1}
        textAlign="center"
        color="white"
        background="black"
        border="0"
        borderRadius="20px"
      >
        Lisboa Pizza 🍕
      </Box>

      <Box
        p="0"
        margin="35"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
      >
        {restaurantes.map((r) => (
          <Restaurant
            name={r.name}
            image={r.image[0].url}
            alt="margherita pizza"
            notes={r.notes}
          ></Restaurant>
        ))}
        {/* <Restaurant
          name="Lupita"
          image="https://lifecooler.com/files/registos/imagens/519641/420231.jpg"
          alt="margherita pizza"
        ></Restaurant>
        <Restaurant
          name="Retrogusto"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNBqa3qtLwyGuMYgb1AYjapWi9t6SRPb8aYjNAzFpgj64UVWiffk7b2VrLiAMkGGqYQ&usqp=CAU"
        ></Restaurant>
        <Restaurant
          name="Tozzi"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNBqa3qtLwyGuMYgb1AYjapWi9t6SRPb8aYjNAzFpgj64UVWiffk7b2VrLiAMkGGqYQ&usqp=CAU"
        ></Restaurant> */}
      </Box>
    </Box>
  );
};

export default Home;
function getData() {
  return new Promise(
    (resolve, reject) => {
      ~base("Restaurants")
        .select({
          view: "Grid view",
        })
        .firstPage(function (
          err,
          records
        ) {
          if (err) {
            console.error(err);
            return;
          }
          const restaurantes = [];
          records.forEach(function (
            record
          ) {
            /*   console.log(
              record.get("Photo")
            ); */
            restaurantes.push({
              name: record.get(
                "Restaurant Name"
              ),
              image:
                record.get("Photo"),
              notes:
                record.get("Notes"),
            }); /* console.log(
              "Retrieved",
              record.get(
                "Restaurant Name"
              )
            ); */
          });

          resolve(restaurantes);
        });
    }
  );
}
export async function getServerSideProps(
  context
) {
  const restaurantes = await getData();
  return {
    props: { restaurantes },
  };
  /*  return {
    props: {
      restaurantes: [
        {
          name: "Lupita",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNBqa3qtLwyGuMYgb1AYjapWi9t6SRPb8aYjNAzFpgj64UVWiffk7b2VrLiAMkGGqYQ&usqp=CAU",
        },
        {
          name: "Tozzi",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNBqa3qtLwyGuMYgb1AYjapWi9t6SRPb8aYjNAzFpgj64UVWiffk7b2VrLiAMkGGqYQ&usqp=CAU",
        },
        {
          name: "Retrogusto",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNBqa3qtLwyGuMYgb1AYjapWi9t6SRPb8aYjNAzFpgj64UVWiffk7b2VrLiAMkGGqYQ&usqp=CAU",
        },
        {
          name: "Capolla",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyNBqa3qtLwyGuMYgb1AYjapWi9t6SRPb8aYjNAzFpgj64UVWiffk7b2VrLiAMkGGqYQ&usqp=CAU",
        },
      ],
    }, // will be passed to the page component as props
  }; */
}
