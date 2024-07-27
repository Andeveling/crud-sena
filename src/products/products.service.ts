import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto);
    return this.productRepository.save(newProduct);
  }

  // Buscar todos los productos
  findAll() {
    return this.productRepository.find();
  }

  // Buscar un producto por id
  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    console.log(updateProductDto);
    return this.productRepository.update(id, updateProductDto);
  }

  // Borrar producto
  async remove(id: number): Promise<void> {
    // Encuentra el producto que deseas eliminar
    const product = await this.productRepository.findOneBy({ id });

    if (product) {
      // Elimina el producto
      await this.productRepository.remove(product);
    } else {
      // Manejo del caso en que el producto no existe
      throw new Error('Product not found');
    }
  }
}
