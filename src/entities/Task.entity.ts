
import { Column, CreateDateColumn, Entity, ForeignKey, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity.js";

@Entity({ name: 'task' })
export class Task {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ nullable: false })
    title!: string;

    @Column({ nullable: false })
    description!: string;

    @Column({ nullable: false })
    status!: string;

    @Column()
    userId!: string;

        @ManyToOne(()=> User,(user) => user.)


    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
