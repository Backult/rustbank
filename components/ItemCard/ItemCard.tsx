import { Box, Heading, Text, Link } from "@chakra-ui/react";
import Item from "../../types/Item";

const ItemCard = ({ name, description, url, tags }: Item): JSX.Element => {
  return (
    <Box background="gray.700" rounded="lg" my={8} p={4}>
      <Heading>{name}</Heading>
      <Text>{description}</Text>
      <Link href={url}>{url}</Link>
      <p>{tags.join(", ")}</p>
    </Box>
  );
};

export default ItemCard;
