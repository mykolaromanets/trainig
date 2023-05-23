import React from 'react';
import styled from 'styled-components';
import { EmployeeCard } from './EmployeeCard';

export const EmployeeList = ({
  users = [
    {
      id: 1,
      name: 'John',
      email: 'test@mail.com',
      bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      skills: ['react', 'angular', 'vue'],
      isOpenToWork: false,
    },
  ],
}) => {
  return (
    <UserList>
      {users.map(({ id, name, bio, isOpenToWork, email }) => (
        <EmployeeCard
          key={id}
          id={id}
          name={name}
          bio={bio}
          isOpenToWork={isOpenToWork}
          email={email}
        />
      ))}
    </UserList>
  );
};
const UserList = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, 400px));
  gap: 10px;
`;
