import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

const PersonalDetails = ({ details }) => {
  return (
    <section>
      <Table>
        <Thead>
          <Tr>
            {Object.keys(details).map((key) => (
              <Td key={key}>{key}</Td>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {Object.keys(details).map((key) => (
              <Td key={details[key]}>{details[key]}</Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </section>
  );
};

export default PersonalDetails;
