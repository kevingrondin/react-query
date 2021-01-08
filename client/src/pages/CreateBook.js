import BookForm from "../components/BookForm";
import Container from "../components/Container";
import { Box, Heading } from "rebass/styled-components";
import { createBook } from "../api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(createBook);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data });
    navigate("/");
  };

  return (
    <Container>
      <Box
        sx={{
          py: 3,
        }}
      >
        <Heading sx={{ marginBottom: 3 }}>Create New Book</Heading>
        <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading} />
      </Box>
    </Container>
  );
};

export default CreateBook;
