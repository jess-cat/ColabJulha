// models
import {
    Unit, UnitKind, Ingredient, Recipe, RecipeIngredient, DifficultyKind, LoginModel, LoginResponse, User, Meal, MealKind, Menu
} from '../models';

import { ILoader } from './iloader';
import { IWorker } from './iworker';

export class CookitLoader implements IWorker {
    prepareUsers(loader: ILoader): Promise<void> {
        try {
            // Users
            loader.addUser({ login: 'cookit', name: 'usuario da cookit' });
            loader.addUser({ login: 'leo', name: 'Leonidas Coelho' });
            loader.addUser({ login: 'jess', name: 'Jessicat' });

            return Promise.resolve();
        } catch (error) {
            console.log({ 'prepareUsers error': error });
            throw error;
        }
    }

    public prepareUnits(loader: ILoader): Promise<void> {
        try {
            // Unidades Cookit
            // loader.addUnit({ name: '', plural: '', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Unidade', plural: 'Unidades', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Grama', plural: 'Gramas', symbol: 'g', basic: true, kind: UnitKind.Mass, rate: 1 });
            loader.addUnit({ name: 'Quilograma', plural: 'Quilogramas', symbol: 'kg', basic: false, kind: UnitKind.Mass, rate: 1000 });
            loader.addUnit({ name: 'Maço', plural: 'Maços', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Mililitro', plural: 'Mililitros', symbol: 'ml', basic: false, kind: UnitKind.Mass, rate: .001 });
            loader.addUnit({ name: 'A gosto', plural: 'A gosto', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Vidro', plural: 'Vidros', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Colher', plural: 'Colheres', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Bandeja', plural: 'Bandejas', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Pé', plural: 'Pés', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Retângulo', plural: 'Retângulos', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Filé', plural: 'Filé', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Pacote', plural: 'Pacotes', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Pote', plural: 'Potes', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Fatia', plural: 'Fatias', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Dente', plural: 'Dentes', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });
            loader.addUnit({ name: 'Ramo', plural: 'Ramos', symbol: '', basic: true, kind: UnitKind.Unit, rate: 1 });

            return Promise.resolve();
        } catch (error) {
            console.log({ 'prepareUnits error': error });
            throw error;
        }
    }

    public prepareIngredients(loader: ILoader): Promise<void> {
        try {
            // Ingredientes
            // loader.addIngredient({ base_unit_id: '', name: '' }, '');
            // Receita 1
            loader.addIngredient({ base_unit_id: '', name: 'Cebola roxa' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Limão Tahiti' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Melancia' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Queijo Feta' }, 'Grama');
            loader.addIngredient({ base_unit_id: '', name: 'Salsa' }, 'Maço');
            loader.addIngredient({ base_unit_id: '', name: 'Hortelã' }, 'Maço');
            loader.addIngredient({ base_unit_id: '', name: 'Azeite de oliva extra virgem' }, 'Mililitro');
            loader.addIngredient({ base_unit_id: '', name: 'Azeitonas pretas sem caroço' }, 'Grama');
            loader.addIngredient({ base_unit_id: '', name: 'Pimenta do reino' }, 'A gosto');
            loader.addIngredient({ base_unit_id: '', name: 'Flor de sal' }, 'A gosto');
            // Receita 2
            loader.addIngredient({ base_unit_id: '', name: 'Mix de Lentilha Síria e Cebola Cook it®' }, 'Vidro');
            // Receita 3
            loader.addIngredient({ base_unit_id: '', name: 'Mix de Panqueca Doce Integral de Maçã e Canela Cook it®' }, 'Vidro');
            loader.addIngredient({ base_unit_id: '', name: 'Ovo' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Manteiga derretida' }, 'Colher');
            // Receita 4
            loader.addIngredient({ base_unit_id: '', name: 'Mix de Feijão Moyashi, Amaranto e Sarraceno Cook it®' }, 'Vidro');
            // Receita 5
            loader.addIngredient({ base_unit_id: '', name: 'Beer Bread Integral Cook it®' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Cerveja lager' }, 'Mililitro');
            loader.addIngredient({ base_unit_id: '', name: 'Queijos' }, 'Grama');
            loader.addIngredient({ base_unit_id: '', name: 'Manjericão seco' }, 'Colher (sopa)');
            loader.addIngredient({ base_unit_id: '', name: 'Sal' }, 'Colher (chá)');
            loader.addIngredient({ base_unit_id: '', name: 'Tomatinhos cereja' }, 'Grama');
            loader.addIngredient({ base_unit_id: '', name: 'Queijo parmesão' }, 'Grama');
            loader.addIngredient({ base_unit_id: '', name: 'Farinha de rosca' }, 'Colher (sopa)');
            // Receita 6
            loader.addIngredient({ base_unit_id: '', name: 'Bananas nanicas grandes' }, 'Unidade');
            // Receita 7
            loader.addIngredient({ base_unit_id: '', name: 'Alface romana' }, 'Pé');
            loader.addIngredient({ base_unit_id: '', name: 'Azeite de oliva extra virgem' }, 'Colher (sopa)');
            loader.addIngredient({ base_unit_id: '', name: 'Mostarda Dijon' }, 'Colher (sopa)');
            loader.addIngredient({ base_unit_id: '', name: 'Nozes' }, 'Colher (sopa)');
            // Receita 8
            loader.addIngredient({ base_unit_id: '', name: 'Risoto de Tomate, Alho Poró e Manjericão Cook it®' }, 'Vidro');
            loader.addIngredient({ base_unit_id: '', name: 'Vinho branco' }, 'Mililitro');
            loader.addIngredient({ base_unit_id: '', name: 'Queijo parmesão' }, 'A gosto');
            // Receita 9
            loader.addIngredient({ base_unit_id: '', name: 'Cookie de Aveia e Passas Cook it®' }, 'Vidro');
            loader.addIngredient({ base_unit_id: '', name: 'Óleo de coco' }, 'Colher');
            loader.addIngredient({ base_unit_id: '', name: 'Ovo pequeno' }, 'Unidade');
            // Receita 10
            loader.addIngredient({ base_unit_id: '', name: 'Mix de Lentilha e Shitake Cook it®' }, 'Vidro');
            loader.addIngredient({ base_unit_id: '', name: 'Tomates cereja' }, 'Bandeja');
            loader.addIngredient({ base_unit_id: '', name: 'Azeitonas pretas sem caroço' }, 'Xícara');
            loader.addIngredient({ base_unit_id: '', name: 'Salsinha' }, 'Xícara');
            loader.addIngredient({ base_unit_id: '', name: 'Azeite de oliva' }, 'Colher (sopa)');
            // Receita 11
            loader.addIngredient({ base_unit_id: '', name: 'Papel manteiga' }, 'Retângulo');
            loader.addIngredient({ base_unit_id: '', name: 'Peito de frango' }, 'Filé');
            loader.addIngredient({ base_unit_id: '', name: 'Cebola pequena' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Cenouras' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Vagens francesas' }, 'Pacote');
            loader.addIngredient({ base_unit_id: '', name: 'Limão siciliano' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Mostarda' }, 'Colher');
            // Receita 12
            loader.addIngredient({ base_unit_id: '', name: 'Abacaxi' }, 'Fatia');
            loader.addIngredient({ base_unit_id: '', name: 'Mel' }, 'Colher');
            loader.addIngredient({ base_unit_id: '', name: 'Azeite de oliva extra virgem' }, 'Colher (chá)');
            loader.addIngredient({ base_unit_id: '', name: 'Suco de limão' }, 'Colher (sopa)');
            loader.addIngredient({ base_unit_id: '', name: 'Canela' }, 'A gosto');
            // Receita 13
            loader.addIngredient({ base_unit_id: '', name: 'Cogumelos Portobelo gigantes' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Espinafre fresco' }, 'Xícara');
            loader.addIngredient({ base_unit_id: '', name: 'Bacon' }, 'Xícara');
            loader.addIngredient({ base_unit_id: '', name: 'Queijo gorgonzola' }, 'Xícara');
            // Receita 14
            loader.addIngredient({ base_unit_id: '', name: 'Polenta com Ervas de Provence Cook it®' }, 'Pote');
            loader.addIngredient({ base_unit_id: '', name: 'Tomatinhos sweet grape' }, 'Bandeja');
            loader.addIngredient({ base_unit_id: '', name: 'Alho' }, 'Dente');
            loader.addIngredient({ base_unit_id: '', name: 'Alecrim' }, 'Ramo');
            loader.addIngredient({ base_unit_id: '', name: 'Tomilho' }, 'Ramo');
            loader.addIngredient({ base_unit_id: '', name: 'Azeite de oliva' }, 'A gosto');
            loader.addIngredient({ base_unit_id: '', name: 'Cogumelos Shimeji' }, 'Bandeja');
            // Receita 15
            loader.addIngredient({ base_unit_id: '', name: 'Laranja baia' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Carambola grande' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Maçã red delicious' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Lima da pérsia' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Uvas verdes' }, 'Xícara');
            loader.addIngredient({ base_unit_id: '', name: 'Uvas rosadas' }, 'Xícara');
            loader.addIngredient({ base_unit_id: '', name: 'Pepino' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Xarope de granadine (romã)' }, 'Colher');
            // Receita 16
            loader.addIngredient({ base_unit_id: '', name: 'Tomates Carmem' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Salsinha' }, 'Colher (sopa)');
            // Receita 17
            loader.addIngredient({ base_unit_id: '', name: 'Risoto de Açafrão da Terra Cook it®' }, 'Vidro');
            loader.addIngredient({ base_unit_id: '', name: 'Manteiga' }, 'Colher');
            loader.addIngredient({ base_unit_id: '', name: 'Postas de bacalhau dessalgado' }, 'Grama');
            // Receita 18
            loader.addIngredient({ base_unit_id: '', name: 'Brownie Caboclinho Cook it®' }, 'Vidro');
            loader.addIngredient({ base_unit_id: '', name: 'Ovo grande' }, 'Unidade');
            loader.addIngredient({ base_unit_id: '', name: 'Manteiga derretida' }, 'Colher (sopa)');

            return Promise.resolve();
        } catch (error) {
            console.log({ 'prepareBasicData error': error });
            throw error;
        }
    }

    prepareProducts(loader: ILoader): Promise<void> {
        try {
            // loader.addProduct({ name: 'teste', amount: 2, cover: '' }, 'Cebola roxa');

            return Promise.resolve();
        } catch (error) {
            console.log({ 'prepareProducts error': error });
            throw error;
        }
    }

    public prepareRecipes(loader: ILoader): Promise<void> {
        try {
            this.gerarRecipe1(loader);
            this.gerarRecipe2(loader);
            this.gerarRecipe3(loader);
            this.gerarRecipe4(loader);
            this.gerarRecipe5(loader);
            this.gerarRecipe6(loader);
            this.gerarRecipe7(loader);
            this.gerarRecipe8(loader);
            this.gerarRecipe9(loader);
            this.gerarRecipe10(loader);
            this.gerarRecipe11(loader);
            this.gerarRecipe12(loader);
            this.gerarRecipe13(loader);
            this.gerarRecipe14(loader);
            this.gerarRecipe15(loader);
            this.gerarRecipe16(loader);
            this.gerarRecipe17(loader);
            this.gerarRecipe18(loader);

            return Promise.resolve();
        } catch (error) {
            console.log({ 'prepareRecipes error': error });
            throw error;
        }
    }

    public prepareMenus(loader: ILoader): Promise<void> {
        const meals: Meal[] = [];

        meals.push(
            {
                kind: MealKind.Lunch, day: 0, recipe_id: loader.getRecipe('SALADA DE MELANCIA FETA E AZEITONAS').id,
                product_id: null, order: 0, description: 'ENTRADA'
            },
            {
                kind: MealKind.Lunch, day: 0, recipe_id: loader.getRecipe('SOPA MIX DE LENTILHA SIRIA').id,
                product_id: null, order: 1, description: 'PRINCIPAL'
            },
            {
                kind: MealKind.Lunch, day: 0, recipe_id: loader.getRecipe('MUFFIN INTEGRAL DE MAÇÃ').id,
                product_id: null, order: 2, description: 'SOBREMESA'
            },
            {
                kind: MealKind.Lunch, day: 1, recipe_id: loader.getRecipe('SOPA MIX DE FEIJÃO MOYASHI AMARANTO E SARRACENO').id,
                product_id: null, order: 0, description: 'ENTRADA'
            },
            {
                kind: MealKind.Lunch, day: 1, recipe_id: loader.getRecipe('TORTA CAPRESE COM MASSA INTEGRAL DE CERVEJA').id,
                product_id: null, order: 1, description: 'PRINCIPAL'
            },
            {
                kind: MealKind.Lunch, day: 1, recipe_id: loader.getRecipe('SORVETE DE BANANA').id,
                product_id: null, order: 2, description: 'SOBREMESA'
            },
            {
                kind: MealKind.Lunch, day: 2, recipe_id: loader.getRecipe('MINI ALFACE ROMANA GRELHADA').id,
                product_id: null, order: 0, description: 'ENTRADA'
            },
            {
                kind: MealKind.Lunch, day: 2, recipe_id: loader.getRecipe('RISOTO DE TOMATE, ALHO PORÓ E MANJERICÃO').id,
                product_id: null, order: 1, description: 'PRINCIPAL'
            },
            {
                kind: MealKind.Lunch, day: 2, recipe_id: loader.getRecipe('COOKIE DE AVEIA').id,
                product_id: null, order: 2, description: 'SOBREMESA'
            },
            {
                kind: MealKind.Lunch, day: 3, recipe_id: loader.getRecipe('SALADA MIX DE LENTILHA E SHITAKE').id,
                product_id: null, order: 0, description: 'ENTRADA'
            },
            {
                kind: MealKind.Lunch, day: 3, recipe_id: loader.getRecipe('PAPILOTE DE PEITO DE FRANGO E LEGUMES ASSADOS').id,
                product_id: null, order: 1, description: 'PRINCIPAL'
            },
            {
                kind: MealKind.Lunch, day: 3, recipe_id: loader.getRecipe('ABACAXI GRELHADO COM MEL').id,
                product_id: null, order: 2, description: 'SOBREMESA'
            },
            {
                kind: MealKind.Lunch, day: 4, recipe_id: loader.getRecipe('PORTOBELO RECHEADO DE ESPINAFRE, BACON E GORGONZOLA').id,
                product_id: null, order: 0, description: 'ENTRADA'
            },
            {
                kind: MealKind.Lunch, day: 4, recipe_id: loader.getRecipe('POLENTA CREMOSA DE ERVAS COM SHIMEJI E TOMATE CEREJA').id,
                product_id: null, order: 1, description: 'PRINCIPAL'
            },
            {
                kind: MealKind.Lunch, day: 4, recipe_id: loader.getRecipe('SALADA DE FRUTAS E PEPINO COM XAROPE DE GRANADINE').id,
                product_id: null, order: 2, description: 'SOBREMESA'
            },
            {
                kind: MealKind.Lunch, day: 5, recipe_id: loader.getRecipe('TOMATES RECHEADOS COM RICOTA DEFUMADA').id,
                product_id: null, order: 0, description: 'ENTRADA'
            },
            {
                kind: MealKind.Lunch, day: 5, recipe_id: loader.getRecipe('RISOTO DE AÇAFRÃO DA TERRA E BACALHAU AO FORNO').id,
                product_id: null, order: 1, description: 'PRINCIPAL'
            },
            {
                kind: MealKind.Lunch, day: 5, recipe_id: loader.getRecipe('BROWNIE CABOCLINHO').id,
                product_id: null, order: 2, description: 'SOBREMESA'
            }
        );

        const menu: Menu = {
            name: 'Menu Cookit Almoço',
            cover: '',
            meals: meals,
            preferred_starting_weekday: 1,
            starts_at: new Date('2017-10-29')
        };

        loader.addMenu(menu, 'cookit');

        return Promise.resolve();
    }

    // Receitas Cookit
    private gerarRecipe1(loader: ILoader): void {
        // Receita 1 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Descasque e corte a cebola ao meio no sentido do comprimento.',
            'Fatie finamente em meias luas e coloque em uma tigela com o suco do limão.' +
            'Isso a deixará translúcida e reduzirá seu ardor',
            'Reserve',
            'Retire a casca e as sementes da melancia – se possível use a melancia sem semente o que facilita muito o trabalho!' +
            ', e corte em pedaços',
            'Coloque a melancia em uma tigela grande e rasque as folhas de salsa e hortelã sobre ela.',
            'Eu adoro as ervas fazendo o papel protagonista de folhas na salada!',
            'Coloque as azeitonas, as cebolas sem o suco do limão e por cima quebre o queijo com as mãos em pedaços grosseiros' +
            ' – se usar um queijo feta de boa qualidade ele se esfarelará  facilmente.',
            'Junte o azeite ao suco de limão das cebolas (!) e a pimenta do reino.',
            'Emulsione ligeiramente e regue esta jóia grega!',
            'Esta salada não deve ser salgada.',
            'Como o queijo e a azeitona já são bastante salgados, prove primeiramente o tempero e, se precisar, adicione flocos' +
            ' de flor de sal'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Cebola roxa').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Limão Tahiti').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Melancia').id, amount: 1,
                unit_id: loader.getUnit('Kilograma').id, observation: 'madura e doce'
            }, {
                ingredient_id: loader.getIngredient('Queijo Feta').id, amount: 150,
                unit_id: loader.getUnit('Grama').id, observation: 'de boa qualidade'
            }, {
                ingredient_id: loader.getIngredient('Salsa').id, amount: 1,
                unit_id: loader.getUnit('Maço').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Hortelã').id, amount: 1,
                unit_id: loader.getUnit('Maço').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva extra virgem').id, amount: 100,
                unit_id: loader.getUnit('Mililitro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Azeitonas pretas sem caroço').id, amount: 50,
                unit_id: loader.getUnit('Grama').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Pimenta do reino').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'moída na hora'
            }, {
                ingredient_id: loader.getIngredient('Flor de sal').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'SALADA DE MELANCIA FETA E AZEITONAS',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 30,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe2(loader: ILoader): void {
        // Receita 2 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Despeje o conteúdo do vidro em uma panela com capacidade para 2 litros.',
            'Acrescente 4 medidas do vidro de água e deixe cozinhar em fogo alto até que levante fervura.',
            'Abaixe o fogo e com a panela semi tampada cozinhe por 15 minutos ou até que a lentilha esteja tenra.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Mix de Lentilha Síria e Cebola Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'SOPA MIX DE LENTILHA SIRIA',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 18,
            ingredients: recipeIngredients,
            about: 'Sirva com um fio de azeite ou com uma colherada de coalhada seca.',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe3(loader: ILoader): void {
        // Receita 3 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 180 graus.',
            'Despeje o conteúdo do vidro em uma tigela e acrescente o ovo, a manteiga e o leite e misture até' +
            ' obter uma massa homogenea, sem grumos. ',
            'Coloque porções da massa em fominhas para cupcakes/muffins e leve ao forno por 20 minutos ou até que' +
            ' um palito inserido no centro dos muffins saia limpo. Deixe esfriar. Este muffin delicioso pode ser saboreado ainda morno.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Mix de Panqueca Doce Integral de Maçã e Canela Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Ovo').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'ligeiramente batido'
            }, {
                ingredient_id: loader.getIngredient('Manteiga derretida').id, amount: 1,
                unit_id: loader.getUnit('Colher').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Leite').id, amount: 150,
                unit_id: loader.getUnit('Mililitro').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'MUFFIN INTEGRAL DE MAÇÃ',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 30,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe4(loader: ILoader): void {
        // Receita 4 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Despeje o conteúdo do vidro emu ma panela com capacidade para 2 litros.',
            'Acrescente 4 medidas do vidro de água e deixe cozinhar em fogo alto até que levante fervura.',
            'Abaixe o fogo e com a panela semi tampada cozinhe por 35 minutos ou até que o feijão esteja tenro.',
            'Caso prefira pode-sse usar a panela de pressão e cozinhar por 15 minutos'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Mix de Feijão Moyashi, Amaranto e Sarraceno Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'SOPA MIX DE FEIJÃO MOYASHI AMARANTO E SARRACENO',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 40,
            ingredients: recipeIngredients,
            about: 'Sirva com um fio de azeite.',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe5(loader: ILoader): void {
        // Receita 5 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Pré aqueça o forno a 180 graus.',
            'Temperar os queijos com o sal, o manjericão e a pimenta.',
            'Despejar o conteúdo da garrafa de Beer Bread em uma tigela e acrescentar a cerveja.' +
            ' Misture até obter uma mistura homogenea, mas sem sovar. Colocá-la toda em uma assadeira untada' +
            ' com manteiga e 2 colheres de sopa de farinha de rosca. Por cima da massa colocar o queijo e os tomates' +
            ' afundando cuidadosamente. Polvilhe com o queijo parmesão e o restante da farinha de rosca.',
            'Assar por 40 minutos ou até que sua torta esteja dourada e crocante.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Beer Bread Integral Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Cerveja lager').id, amount: 300,
                unit_id: loader.getUnit('Mililitro').id, observation: 'de sua preferência'
            }, {
                ingredient_id: loader.getIngredient('Queijos').id, amount: 500,
                unit_id: loader.getUnit('Grama').id, observation: 'variados e picados (se for usar a mussarela de búfala tradicional,' +
                ' deixe escorrer o excesso de líquido para não empapar a massa'
            }, {
                ingredient_id: loader.getIngredient('Manjericão seco').id, amount: 1,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Sal').id, amount: 1,
                unit_id: loader.getUnit('Colher (chá)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Pimenta do reino').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'moída na hora, o quanto baste'
            }
            , {
                ingredient_id: loader.getIngredient('Tomatinhos cereja').id, amount: 200,
                unit_id: loader.getUnit('Grama').id, observation: 'ou uva, cortados na metade'
            }
            , {
                ingredient_id: loader.getIngredient('Queijo parmesão').id, amount: 30,
                unit_id: loader.getUnit('Grama').id, observation: 'ralado'
            }, {
                ingredient_id: loader.getIngredient('Farinha de rosca').id, amount: 3,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'TORTA CAPRESE COM MASSA INTEGRAL DE CERVEJA',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 45,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe6(loader: ILoader): void {
        // Receita 6 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Após congeladas bater as bananas no processador de alimentos até obter uma mistura cremosa mas ainda com' +
            ' consistência de gelato, sem derreter.',
            'Se quiser incrementar processe junto com as bananas:',
            '3 colheres de pasta de castanhas; ou' +
            '3 colheres de Nutella; ou',
            'pedaços de morango picado ',
            'Sirva em seguida.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Bananas nanicas grandes').id, amount: 4,
                unit_id: loader.getUnit('Unidade').id, observation: 'descascadas e cortadas em rodelas e congeladas'
            }
        );

        const recipe: Recipe = {
            name: 'SORVETE DE BANANA',
            steps: steps,
            media: media,
            cover: '',
            portions: 1,
            preparation_time: 10, // SEM INFORMAÇÕES
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe7(loader: ILoader): void {
        // Receita 7 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Misture os ingredientes do vinagrete de mostarda. Temperar as metades de alface com metade deste vinagrtete.' +
            ' Aquecer uma chapa ou frigideira anti aderente até que comece a esfumaçar. Colocar as alfaces com o lado do corte' +
            ' virado para baixo e deixar grelhar por 5 minutos até que fiquem marcadas.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Alface romana').id, amount: 2,
                unit_id: loader.getUnit('Pé').id, observation: '(little gem) cortadas ao meio no sentido longitudinal'
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva extra virgem').id, amount: 4,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Mostarda Dijon').id, amount: 1,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Flor de sal').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Pimenta do reino').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'moída na hora'
            }, {
                ingredient_id: loader.getIngredient('Nozes').id, amount: 4,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: 'picadas'
            }
        );

        const recipe: Recipe = {
            name: 'MINI ALFACE ROMANA GRELHADA',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 10,
            ingredients: recipeIngredients,
            about: 'Sirva morna com o restante do vinagrete e as nozes picadas polvilhadas sobre a alface.',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe8(loader: ILoader): void {
        // Receita 8 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Em uma panela grande aqueça um colher de manteiga. Despeje o conteúdo do vidro e refogue por 1 minuto.' +
            ' Acrescente o vinho branco  e deixe o álcool evaporar. Coloque 3 medidas do vidro de água, abaixe o fogo e' +
            ' cozinhe por 18 minutos ou até que o arroz esteja al dente e a água tenha evaporado, mas ainda cremoso.' +
            ' Finalize com 1 colher de manteiga e acrescente queijo parmesão a gosto.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Risoto de Tomate, Alho Poró e Manjericão Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Manteiga').id, amount: 2,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: 'ou azeite'
            }, {
                ingredient_id: loader.getIngredient('Vinho branco').id, amount: 100,
                unit_id: loader.getUnit('Mililitro').id, observation: '(opcional)'
            }, {
                ingredient_id: loader.getIngredient('Queijo parmesão').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'ralado'
            }
        );

        const recipe: Recipe = {
            name: 'RISOTO DE TOMATE, ALHO PORÓ E MANJERICÃO',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 20,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe9(loader: ILoader): void {
        // Receita 9 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 180 graus.',
            'Despejo o conteúdo do vidro em uma tigela e acrescente o ovo e o óleo de coco. Misture bem até incorporar.' +
            ' Forre uma assadeira com papel manteiga e coloque colheradas de massa sobre a assadeira ou faça bolinhas.' +
            ' Leve para assar por 10 a 12 minutos. Retire do forno e deixe esfriar sobre uma gradinha.' +
            ' Os cookies sairão do forno macios e ficarão crocantes quando esfriarem!'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Cookie de Aveia e Passas Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Óleo de coco').id, amount: 1,
                unit_id: loader.getUnit('Colher').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Ovo pequeno').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'ligeiramente batido'
            }
        );

        const recipe: Recipe = {
            name: 'COOKIE DE AVEIA',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 15,
            ingredients: recipeIngredients,
            about: 'Você poderá espalhar a massa inteira sobre a assadeira e assar.' +
            'Assim que retirar do forno pode cortar em quadradinhos ou barrinha',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe10(loader: ILoader): void {
        // Receita 10 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Despeje o conteúdo do vidro em uma panela com capacidade para 2 litros.' +
            ' Acrescente 4 medidas do vidro de água e deixe cozinhar em fogo alto até que levante fervura.' +
            ' Abaixe o fogo e com a panela semi tampada cozinhe por 30 minutos ou até que a lentilha esteja cozida, mas al dente.' +
            ' Caso prefira pode-se usar a panela de pressão e cozinhar por 15 minutos.' +
            ' Coe o caldo do cozimento e reserve para alguma outra preparação, como por exemplo acrescentar ao feijão cozido.',
            'Deixe esfriar e acrescente os tomates, as azeitonas e ervas e tempere com o azeite.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Mix de Lentilha e Shitake Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Tomates cereja').id, amount: 1,
                unit_id: loader.getUnit('Bandeja').id, observation: 'cortados em metades'
            }, {
                ingredient_id: loader.getIngredient('Azeitonas pretas sem caroço').id, amount: 0.25,
                unit_id: loader.getUnit('Xícara').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Salsinha').id, amount: 0.5,
                unit_id: loader.getUnit('Xícara').id, observation: 'picada, ou outra erva fresca de sua preferência'
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva').id, amount: 2,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'SALADA MIX DE LENTILHA E SHITAKE',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 30,
            ingredients: recipeIngredients,
            about: 'Sirva fria.',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe11(loader: ILoader): void {
        // Receita 11 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 200 graus.',
            'Em uma assadeira grande, coloque 1 retângulo do papel manteiga. Sobre ele, no sentido do comprimento,' +
            ' coloque 1/4 da cebola, ¼ da cenoura picada, ¼ da vagem. Coloque o filé de frango sobre esta “cama” de legumes.' +
            ' Misture o suco do limão, as raspas, azeite, a mostarda e tempere com sal, pimenta e tempere o frango com este vinagrete.' +
            ' Feche o papel manteiga fazendo um embrulho cuidando para que o vapor, nem os líquidos do cozimento escape.',
            'Repita esta operação com os restante dos ingredientes até obter 4 porções.' +
            ' Leve a assadeira ao forno pré aquecido e asse por 30 minutos.',
            'Retire os envelopes do forno e com muito cuidado coloque-os no prato de servir.' +
            ' Abra a parte superior cortando com a tesoura e sirva em seguida dentro do próprio papilote'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Papel manteiga').id, amount: 4,
                unit_id: loader.getUnit('Retângulo').id, observation: 'de aproximadamente 20cm x 30cm'
            }, {
                ingredient_id: loader.getIngredient('Peito de frango').id, amount: 4,
                unit_id: loader.getUnit('Filé').id, observation: 'preferencialmente orgânicos'
            }, {
                ingredient_id: loader.getIngredient('Cebola pequena').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'fatiada em "meia-lua"'
            }, {
                ingredient_id: loader.getIngredient('Cenouras').id, amount: 2,
                unit_id: loader.getUnit('Unidade').id, observation: 'cortadas em cubos'
            }, {
                ingredient_id: loader.getIngredient('Vagens francesas').id, amount: 1,
                unit_id: loader.getUnit('Pacote').id, observation: 'congeladas'
            }, {
                ingredient_id: loader.getIngredient('Limão siciliano').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'suco e raspas da casca'
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva').id, amount: 4,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Sal').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Pimenta do reino').id, amount: 2,
                unit_id: loader.getUnit('A gosto').id, observation: 'moída na hora'
            }
        );

        const recipe: Recipe = {
            name: 'PAPILOTE DE PEITO DE FRANGO E LEGUMES ASSADOS',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 30,
            ingredients: recipeIngredients,
            about: '.',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe12(loader: ILoader): void {
        // Receita 12 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça uma grelha ou frigideira em fogo alto.',
            'Misture os ingredientes da marinada em uma tigela e pincele nas fatias deabacaxi de ambos os lados.' +
            ' Quando a grelha estiver bem quente, coloque as fatias para grelhar de 3 a 4 minutos de cada lado,' +
            ' pincelando a marinada ao virar as fatias.',
            'Sirva morno'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Abacaxi').id, amount: 8,
                unit_id: loader.getUnit('Fatia').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Mel').id, amount: 2,
                unit_id: loader.getUnit('Colher').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva extra virgem').id, amount: 1,
                unit_id: loader.getUnit('Colher (chá)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Suco de limão').id, amount: 1,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Canela').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'ABACAXI GRELHADO COM MEL',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 5,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe13(loader: ILoader): void {
        // Receita 13 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 200 graus.',
            'Limpe os cogumelos com papel toalha e retire o talo. Passe azeite em toda a superficie dos cogumelos e' +
            ' tempere-os com sal e pimenta do reino lembrando que o bacon e o queijo já são salgados',
            'Coloque 1/4 das folhas de espinafre, 1/4 do bacon picado e 1/4 do queijo em cada cogumelo.',
            'Transfira os cogumelos para uma assadeira forrada com papel aluminio ou papel manteiga e leve para assar por 20 minutos.',
            'Sirva em seguida'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Cogumelos Portobelo gigantes').id, amount: 4,
                unit_id: loader.getUnit('Unidade').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva').id, amount: 2,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Espinafre fresco').id, amount: 2,
                unit_id: loader.getUnit('Xícara').id, observation: 'rasgados'
            }, {
                ingredient_id: loader.getIngredient('Bacon').id, amount: 0.5,
                unit_id: loader.getUnit('Xícara').id, observation: 'cortado em cubinhos'
            }, {
                ingredient_id: loader.getIngredient('Queijo gorgonzola').id, amount: 0.5,
                unit_id: loader.getUnit('Xícara').id, observation: 'despedaçado'
            }, {
                ingredient_id: loader.getIngredient('Sal').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Pimenta do reino').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'moída na hora'
            }
        );

        const recipe: Recipe = {
            name: 'PORTOBELO RECHEADO DE ESPINAFRE, BACON E GORGONZOLA',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 20,
            ingredients: recipeIngredients,
            about: 'Para uma versão veggie, omita o bacon',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe14(loader: ILoader): void {
        // Receita 14 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 120 graus.',
            'Coloque os tomates em uma assadeira, juntamente com os dentes de alho, as ervas e cubra com o azeite de oliva.' +
            ' Quanto mais rasa a assadeira menor quantidade de azeite você precisará. Leve ao forno por 10 a 15 minutos.',
            'Enquanto isso prepare a polenta.Coloque o conteúdo do pote de polenta em uma panela. Acrescente 3 medidas do vidro de água' +
            ' e mexa bem. Leve a panela o fogo e deixe cozinhar, em fogo baixo por 10 minutos. Ao final, acrescente a manteiga' +
            ' e mexa bem para ficar cremosa.',
            'Para preparar os cogumelos utilize uma colher de sopa do azeite em que foram preparados os tomatinhos e aqueça em' +
            ' uma frigideira. Acrescente o alho e doure levemente. Acrescente os cogumelos e refogue até ficarem macios, mas al dente.',
            'Servir a polenta em uma travessa, cubra com os tomatinhos e os cogumelos. Regue com o azeite do confit de tomates' +
            ' e tempere com flor de sal e pimenta do reino.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Polenta com Ervas de Provence Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Pote').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Manteiga').id, amount: 3,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Tomatinhos sweet grape').id, amount: 1,
                unit_id: loader.getUnit('Bandeja').id, observation: 'ou cereja'
            }, {
                ingredient_id: loader.getIngredient('Alho').id, amount: 2,
                unit_id: loader.getUnit('Dente').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Alecrim').id, amount: 1,
                unit_id: loader.getUnit('Ramo').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Tomilho').id, amount: 1,
                unit_id: loader.getUnit('Ramo').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'o quanto baste para cobrir os tomates'
            }, {
                ingredient_id: loader.getIngredient('Cogumelos Shimeji').id, amount: 1,
                unit_id: loader.getUnit('Bandeja').id, observation: 'cortados em floretes'
            }, {
                ingredient_id: loader.getIngredient('Alho').id, amount: 1,
                unit_id: loader.getUnit('Dente').id, observation: 'picado'
            }, {
                ingredient_id: loader.getIngredient('Flor de sal').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'o quanto baste'
            }, {
                ingredient_id: loader.getIngredient('Pimenta do reino').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'moída na hora'
            }
        );

        const recipe: Recipe = {
            name: 'POLENTA CREMOSA DE ERVAS COM SHIMEJI E TOMATE CEREJA',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 30,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe15(loader: ILoader): void {
        // Receita 15 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Coloque as frutas em taças individuais e regue cada 1 com 1 colher de xarope de granadine.',
            'Não deixe de colocar o pepino, pois ele acrescentarámuita refrescância a salada de frutas!'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Laranja baia').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'descascada e cortada em gomos'
            }, {
                ingredient_id: loader.getIngredient('Carambola grande').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'fatiada'
            }, {
                ingredient_id: loader.getIngredient('Maçã red delicious').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'sem o coração e picada em cubos'
            }, {
                ingredient_id: loader.getIngredient('Lima da pérsia').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'descascada e cortada em gomos'
            }, {
                ingredient_id: loader.getIngredient('Uvas verdes').id, amount: 0.5,
                unit_id: loader.getUnit('Xícara').id, observation: 'sem semente'
            }, {
                ingredient_id: loader.getIngredient('Uvas rosadas').id, amount: 0.5,
                unit_id: loader.getUnit('Xícara').id, observation: 'sem semente'
            }, {
                ingredient_id: loader.getIngredient('Pepino').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'cortado em rodelas'
            }, {
                ingredient_id: loader.getIngredient('Xarope de granadine (romã)').id, amount: 4,
                unit_id: loader.getUnit('Colher').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'SALADA DE FRUTAS E PEPINO COM XAROPE DE GRANADINE',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 10,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe16(loader: ILoader): void {
        // Receita 16 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 190 graus.',
            'Lave os tomates e retire a tampa de cada um',
            'Retire as sementes com uma colher. Em uma tigela coloque a ricota e amasse com um garfo. Tempere com a salsinha,' +
            ' 1 colher de azeite, sal e pimenta do reino a gosto.',
            'Rechei os tomates com esta mistura. Polvilhe o queijo parmesão e coloque os tomates recheados em' +
            ' uma assadeira forrada com papel aluminio.',
            'Regue com o azeite restante e leve ao forno para assar por 30 minutos. Sirva em seguida.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Tomates Carmem').id, amount: 4,
                unit_id: loader.getUnit('Unidade').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Ricota').id, amount: 400,
                unit_id: loader.getUnit('Grama').id, observation: 'defumada'
            }, {
                ingredient_id: loader.getIngredient('Sal').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Salsinha').id, amount: 1,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: 'picada'
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva extra virgem').id, amount: 2,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Queijo parmesão').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'ralado'
            }, {
                ingredient_id: loader.getIngredient('Pimenta do reino').id, amount: 1,
                unit_id: loader.getUnit('A gosto').id, observation: 'moída na hora'
            }
        );

        const recipe: Recipe = {
            name: 'TOMATES RECHEADOS COM RICOTA DEFUMADA',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 30,
            ingredients: recipeIngredients,
            about: '',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe17(loader: ILoader): void {
        // Receita 17 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 180 graus. Coloque as postas de bacalhau já descongeladas na assadeira.' +
            ' Cubra com o azeite de oliva. O ideal é que o peixe fique bem justo na assadeira para que o azeite cubra todas as postas.' +
            ' Se precisar acrescente mais azeite. Junte os dentes de alho e as ervas. Leve para assar por 20 minutos',
            'Agora vamos ao preparo fácil do Risoto de Açafrão. Em uma panela acrescente 1 colher de manteiga ou azeite.' +
            ' Despeje o conteúdo do vidro em uma panela e refogue por 1 minuto. Acrescente 3 medidas do vidro de água, mexa e' +
            ' deixe ferver. Abaixe o fogo e cozinhe por 18 minutos ou até que o arroz esteja al dente',
            'Neste momento o bacalhau já deve estar confitado. Separe em lascas e coloque sobre o Risoto, já pronto.' +
            ' Regue com  azeite do cozimento do bacalhau e sirva com azeitonas pretas, se desejar.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Risoto de Açafrão da Terra Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Vinho branco').id, amount: 100,
                unit_id: loader.getUnit('Mililitro').id, observation: 'opcional'
            }, {
                ingredient_id: loader.getIngredient('Manteiga').id, amount: 2,
                unit_id: loader.getUnit('Colher').id, observation: 'ou azeite de oliva extra virgem'
            }, {
                ingredient_id: loader.getIngredient('Postas de bacalhau dessalgado').id, amount: 400,
                unit_id: loader.getUnit('Grama').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Azeite de oliva extra virgem').id, amount: 300,
                unit_id: loader.getUnit('Mililitro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Alho').id, amount: 4,
                unit_id: loader.getUnit('Dente').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Tomilho').id, amount: 1,
                unit_id: loader.getUnit('Ramo').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Alecrim').id, amount: 1,
                unit_id: loader.getUnit('Ramo').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'RISOTO DE AÇAFRÃO DA TERRA E BACALHAU AO FORNO',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 50,
            ingredients: recipeIngredients,
            about: 'Sirva fria.',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

    private gerarRecipe18(loader: ILoader): void {
        // Receita 18 ------------------------------------------
        const steps: string[] = [];
        const media: string[] = [];
        const recipeIngredients: RecipeIngredient[] = [];

        steps.push(
            'Aqueça o forno a 180 graus.',
            'Despeje o conteúdo do vidro em uma tigela e acrescente o ovo e a manteiga misturando' +
            ' bem até incorporar e obter uma mistura homogênea.',
            'Despeje a massa em uma assadeira 18cm x 14cm forrada com papel manteiga ou coloque em forminhas para cupcake',
            'Asse por 15 a 20 minutos até que se forme uma casquinha crocante mas ainda esteja macio ao toque.' +
            ' Deixe esfriar sobre uma gradinha antes de servir.'
        );

        media.push();

        recipeIngredients.push(
            {
                ingredient_id: loader.getIngredient('Brownie Caboclinho Cook it®').id, amount: 1,
                unit_id: loader.getUnit('Vidro').id, observation: ''
            }, {
                ingredient_id: loader.getIngredient('Ovo grande').id, amount: 1,
                unit_id: loader.getUnit('Unidade').id, observation: 'ligeralmente batido'
            }, {
                ingredient_id: loader.getIngredient('Manteiga derretida').id, amount: 3,
                unit_id: loader.getUnit('Colher (sopa)').id, observation: ''
            }
        );

        const recipe: Recipe = {
            name: 'BROWNIE CABOCLINHO',
            steps: steps,
            media: media,
            cover: '',
            portions: 4,
            preparation_time: 30,
            ingredients: recipeIngredients,
            about: 'Sirva fria.',
            difficulty: DifficultyKind.Easy
        };

        loader.addRecipe(recipe, 'cookit');
    }

}
