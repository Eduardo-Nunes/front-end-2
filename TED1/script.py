import os
clear = lambda: os.system('cls')

GENEROMASCULINO = 1
GENEROFEMININO = 2

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
    print(f"Posição: {index}, Genero: {print_gender(gender)}, Idade: {height}")
    people_list[1].append(height)
    people_list[0].append(gender)

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
    min = 0
    max = 500
    for people_height in people_list[1]:
        if people_height > max:
            max = people_height
        elif people_height < min:
            min = people_height
    return (min, max)

if __name__ == '__main__':
    print('--- --- Iniciando o programa --- ---')

    for i in range(1):
        print(f"i: {i}")
        get_new_people(i)

    option = 1
    while option > 0:
        print("Opções:")
        print("1 - Obter Maior e Menor altura do Grupo")
        print("2 - A Média de altura das peessoas de genero Masculino")
        print("3 - O numero de pessoas do genero Feminino")
        print("0 - Sair")

        option = int(input("Digite uma das opçoes para realizar uma ação: "))

        match option:
            case 1:
                min_max = min_max_height()
                print(f"A Altura minima: {min_max[0]}, a altura maxima: {min_max[1]}")
            case 2:


    print('--- --- Terminando o programa --- ---')