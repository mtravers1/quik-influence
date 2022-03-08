import { Center } from "@chakra-ui/react";
import NextLink from "components/NextLink";
import React from "react";
import { get_user, parseJwt } from "utils/helpers";

const NotFoundPage = () => {
  const user = get_user();

  return (
    <Center>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you\'re lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <NextLink
                    href={user.token ? "/dashboard" : "/login"}
                    className="link_404"
                  >
                    Go to Home
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Center>
  );
};

export default NotFoundPage;
