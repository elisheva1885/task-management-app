import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Task } from './Task.entity.js'

@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn('uuid')
	id!: string
	@Column({ type: 'varchar', nullable: false, unique: true })
	username!: string
	@Column({ type: 'varchar', nullable: false })
	password!: string

	@OneToMany(() => Task, (task) => task.user, { cascade: true })
	tasks!: Task[]
}
