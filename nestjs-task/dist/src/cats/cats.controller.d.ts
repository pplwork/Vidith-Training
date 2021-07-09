import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
    findOne(id: string): Promise<Cat>;
    update(id: string, updateCatDto: UpdateCatDto): Promise<Cat>;
    remove(id: string): Promise<Cat>;
}
