import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../../../common/presentation/components/Box/Box";
import {
  Button,
  Card,
  Image,
  Spacer,
  Text,
  User,
  useTheme,
} from "@nextui-org/react";
import {
  FaArrowCircleUp,
  FaArrowLeft,
  FaRegStar,
  FaStar,
} from "react-icons/fa";

const ProfileView = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();

  return (
    <Box
      css={{
        display: "flex",
        height: "100vh",
        background: `linear-gradient(45deg, ${theme?.colors.primaryShadow.value}, ${theme?.colors.secondaryShadow.value})`,
      }}
    >
      <Card
        css={{
          backgroundColor: "transparent",
          borderRadius: "0",
          backdropFilter: "blur(4px)",
        }}
      >
        <Card.Header
          css={{
            height: "20%",
            maxHeight: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div>
              <Text b>NOMBRE</Text>
              <Text>EMAIL</Text>
              <Text>
                Rating:{" "}
                {
                  <>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                  </>
                }
              </Text>
            </div>

            <User
              name=""
              description=""
              src={`https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`}
              color="gradient"
              bordered
              zoomed
              size="custom"
              css={{
                padding: "20px",
                width: "50%",
              }}
              onClick={() => {
                alert("Cambiar foto");
              }}
            />
          </div>
        </Card.Header>

        <Card.Body>
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {Array(30)
              .fill(0)
              .map((_, i) => (
                <div key={i}>
                  <Image
                    width="80px"
                    src={`https://picsum.photos/seed/${i}/200/300`}
                  />
                </div>
              ))}
          </section>
        </Card.Body>

        <Card.Footer
          css={{
            height: "20%",
            maxHeight: "150px",
            borderRadius: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            css={{
              width: "100px",
            }}
            color="secondary"
            auto
            icon={<FaArrowLeft />}
          >
            Volver
          </Button>

          <Button
            css={{
              width: "100px",
            }}
            color="primary"
            auto
            icon={<FaArrowCircleUp />}
          >
            Subir
          </Button>
        </Card.Footer>
      </Card>
    </Box>
  );
};

export default ProfileView;
