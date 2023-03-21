import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('string')
    email:string

    @Column('string')
    password:string
}