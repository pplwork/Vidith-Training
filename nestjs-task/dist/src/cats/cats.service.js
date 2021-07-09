"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cat_entity_1 = require("./entities/cat.entity");
let CatsService = class CatsService {
    constructor(catRepository) {
        this.catRepository = catRepository;
    }
    create(createCatDto) {
        const newCat = this.catRepository.create(createCatDto);
        return this.catRepository.save(newCat);
    }
    findAll() {
        return this.catRepository.find();
    }
    async findOne(id) {
        try {
            const cat = await this.catRepository.findOneOrFail(id);
            return cat;
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async update(id, updateCatDto) {
        try {
            const cat = await this.catRepository.findOneOrFail(id);
            cat.name = updateCatDto.name;
            cat.age = updateCatDto.age;
            cat.breed = updateCatDto.breed;
            return this.catRepository.save(cat);
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async remove(id) {
        try {
            const cat = await this.catRepository.findOneOrFail(id);
            return this.catRepository.remove(cat);
        }
        catch (err) {
            throw new common_1.HttpException(err, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
CatsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cat_entity_1.Cat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map