import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'certificates' })
export class Certificate {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({ name: 'full_name', type: 'varchar' })
    fullName: string

  @Column({ name: 'dni', type: 'varchar' })
    dni: string

  @Column({ name: 'area', type: 'varchar' })
    area: string

  @Column({ name: 'course', type: 'varchar' })
    course: string

  @Column({ name: 'company', type: 'varchar' })
    company: string

  @Column({ name: 'modality', type: 'varchar' })
    modality: string

  @Column({ name: 'duration', type: 'varchar' })
    duration: string

  @Column({ name: 'certification', type: 'varchar' })
    certification: string

  @Column({ name: 'start_date', type: 'datetime' })
    date: Date
}
