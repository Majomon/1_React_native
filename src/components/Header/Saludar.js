import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstName, lastName } = props;

  return (
    <View>
      <Text>
        Hola {firstName} {lastName}
      </Text>
    </View>
  );
}

Saludar.defaultProps = {
  firstName: "Name NN",
  lastName: "LastName NN",
};

/* Para el tipo de props/inputs que se permiten */
Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  /*   lastName: PropTypes.number, */
};
