import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Todo {
  @PrimaryColumn()
  id: number;
}
