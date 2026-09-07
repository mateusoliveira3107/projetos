# importando bibliotecas
from tkinter import ttk
import tkinter as tk

# criando variáveis para cores
cor_1 = "#1e1f1e"
cor_2 = "#feffff"
cor_3 = "#38576b"
cor_4 = "#ECEFF1"
cor_5 = "#FFAB40"

# janela principal
janela = tk.Tk()
janela.geometry("263x364")
janela.title("Calculadora")
janela.configure(bg=cor_1)

# criando frames
frame_tela = tk.Frame(janela, width=263, height=65,bg=cor_3)
frame_tela.grid(row=0, column=0)

frame_tela_corpo = tk.Frame(janela, width=263, height=300)
frame_tela_corpo.grid(row=1, column=0)

todos_valores = ""


# Funções

def entrar_valores(numero):
    global todos_valores

    todos_valores = todos_valores + str(numero)

    # Exibir o valor na tela
    valor_escrito.set(todos_valores)

def calcular():
    global todos_valores
    try:
        resultado = eval(todos_valores)
        valor_escrito.set(str(resultado))
        todos_valores = str(resultado)
    except Exception:
        valor_escrito.set("Erro")
        todos_valores = ""

def limpar_tela():
    global todos_valores
    todos_valores = ""
    valor_escrito.set(todos_valores)
    

# Labels
valor_escrito = tk.StringVar()

app_label = tk.Label(frame_tela, textvariable=valor_escrito, width=20, height=3, anchor="e", font=("Ivy 16 bold"), bg=cor_3, fg=cor_2)
app_label.place(x=-2, y=0)

# Botões

# linha 1
botao_1 = tk.Button(frame_tela_corpo, text="C", width=15, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=limpar_tela)
botao_1.place(x=2, y=0)
botao_2 = tk.Button(frame_tela_corpo, text="%", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("%"))
botao_2.place(x=132, y=0)
botao_3 = tk.Button(frame_tela_corpo, text="/", width=7, height=3, bg=cor_5, font=("Arial", 10, "bold"), command=lambda: entrar_valores("/"))
botao_3.place(x=198, y=0)

# linha 2
botao_4 = tk.Button(frame_tela_corpo, text="7", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("7"))
botao_4.place(x=0, y=60)
botao_5 = tk.Button(frame_tela_corpo, text="8", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("8"))
botao_5.place(x=66, y=60)
botao_6 = tk.Button(frame_tela_corpo, text="9", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("9"))
botao_6.place(x=132, y=60)
botao_7 = tk.Button(frame_tela_corpo, text="*", width=7, height=3, bg=cor_5, font=("Arial", 10, "bold"), command=lambda: entrar_valores("*"))
botao_7.place(x=198, y=60)

# linha 3
botao_8 = tk.Button(frame_tela_corpo, text="4", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("4"))
botao_8.place(x=0, y=120)
botao_9 = tk.Button(frame_tela_corpo, text="5", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("5"))
botao_9.place(x=66, y=120)
botao_10 = tk.Button(frame_tela_corpo, text="6", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("6"))
botao_10.place(x=132, y=120)
botao_11 = tk.Button(frame_tela_corpo, text="-", width=7, height=3, bg=cor_5, font=("Arial", 10, "bold"), command=lambda: entrar_valores("-"))
botao_11.place(x=198, y=120)

# linha 4
botao_12 = tk.Button(frame_tela_corpo, text="1", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("1"))
botao_12.place(x=0, y=180)
botao_13 = tk.Button(frame_tela_corpo, text="2", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("2"))
botao_13.place(x=66, y=180)
botao_14 = tk.Button(frame_tela_corpo, text="3", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("3"))
botao_14.place(x=132, y=180)
botao_15 = tk.Button(frame_tela_corpo, text="+", width=7, height=3, bg=cor_5, font=("Arial", 10, "bold"), command=lambda: entrar_valores("+"))
botao_15.place(x=198, y=180)

# linha 5
botao_16 = tk.Button(frame_tela_corpo, text="0", width=15, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("0"))
botao_16.place(x=2, y=240)
botao_17 = tk.Button(frame_tela_corpo, text=".", width=7, height=3, bg=cor_4, font=("Arial", 10, "bold"), command=lambda: entrar_valores("."))
botao_17.place(x=132, y=240)
botao_18 = tk.Button(frame_tela_corpo, text="=", width=7, height=3, bg=cor_5, font=("Arial", 10, "bold"), command=calcular)
botao_18.place(x=198, y=240)




# loop principal
janela.mainloop()