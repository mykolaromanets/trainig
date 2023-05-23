import React from 'react';
import styled from 'styled-components';
import { StyledButton } from 'components/RegisterForm/RegisterForm.styled';


export const EmployeeCard = ({
    id,
    name,
    bio,
    isOpenToWork,
    email,
    skills,
    onDelete,
}) => {
    return (
        <UserCard open={isOpenToWork}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{bio} </h4>

            
            )
        })}