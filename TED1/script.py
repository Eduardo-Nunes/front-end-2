import os
clear = lambda: os.system('cls')

GENEROMASCULINO = 1
GENEROFEMININO = 2
HEIGHT = 1
GENDER = 0

people_list = [[],[]]

def print_gender(g):
    if  g == GENEROMASCULINO:
        return "Masculino"
    elif g == GENEROFEMININO:
        return "Feminino"
    else:
        return "Preferiu não informar"

def get_new_people(index):
    gender = get_gender()
    height = get_height()
    people_list[HEIGHT].append(height)
    people_list[GENDER].append(gender)
    print('--- --- Pessoa Salva com sucesso! --- ---')
    print(f"Posição: {index}, Genero: {print_gender(gender)}, Altura: {height}cm")
    input('--- --- Pressione enter para continuar! --- ---')
    clear()

def show_input_error():
    print('--- --- Opção incorreta!. Digite enter para tentar novamente --- ---')
    input()
    clear()

def get_gender():
    g = int(input("Qual o genero da pessoa? \n 1-Masculino / 2-Feminino \n"))
    if 1 <= g <= 2:
        return g
    else:
        show_input_error()
        return get_gender()

def get_height():
    alt = int(input("Qual é a sua altura em centimetros?\n"))
    if alt >= 1:
        return alt
    else:
        show_input_error()
        return get_height()

def min_max_height():
    min = 500
    max = 0
    for people_height in people_list[HEIGHT]:
        if people_height > max:
            max = people_height
        elif people_height < min:
            min = people_height
    return (min, max)

def gen_filter(gen):
    gen_f = []
    for index, people_gen in enumerate(people_list[GENDER]):
        if people_gen == gen:
            gen_f.append(people_list[HEIGHT][index])
    return gen_f

if __name__ == '__main__':
    print('--- --- Iniciando o programa --- ---')

    for i in range(15):
        get_new_people(i)

    option = 1
    while option > 0:
        clear()
        print("Opções:")
        print("1 - Obter Maior e Menor altura do Grupo")
        print("2 - A Média de altura das pessoas de genero Masculino")
        print("3 - O numero de pessoas do genero Feminino")
        print("0 - Sair")

        option = int(input("Digite uma das opçoes para realizar uma ação: "))

        match option:
            case 1:
                min_max = min_max_height()
                print(f"A Altura minima: {min_max[0]}cm, a altura maxima: {min_max[1]}cm")
                input('--- --- Pressione enter para continuar! --- ---')
            case 2:
                masculino = gen_filter(GENEROMASCULINO)
                print(f"A Média de altura das pessoas de genero Masculino: {sum(masculino)/len(masculino)}cm")
                input('--- --- Pressione enter para continuar! --- ---')
            case 3:
                feminino = gen_filter(GENEROFEMININO)
                print(f"A numero de pessoas do genero Feminino: {len(feminino)}")
                input('--- --- Pressione enter para continuar! --- ---')

    print('--- --- Terminando o programa --- ---')