# Generated by Django 3.2.7 on 2021-10-06 03:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tribus', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comentario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario', models.CharField(max_length=100)),
                ('idPost', models.IntegerField(default=0)),
                ('fecha', models.DateField(auto_now_add=True)),
                ('contenido', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Evento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nuevo_Evento', models.CharField(max_length=100)),
                ('definir_Evento', models.CharField(max_length=200)),
                ('fecha_Evento', models.DateField()),
                ('horas_evento', models.TimeField(blank=True, null=True)),
                ('costo', models.FloatField(default=0)),
                ('añadir_comentarios', models.TextField(max_length=200)),
                ('localizacion_Evento', models.CharField(max_length=200)),
                ('imagen_Evento', models.ImageField(blank=True, null=True, upload_to='')),
                ('archivoInfo', models.FileField(blank=True, null=True, upload_to='')),
            ],
        ),
        migrations.DeleteModel(
            name='Comentarios',
        ),
        migrations.DeleteModel(
            name='Eventos',
        ),
        migrations.RenameField(
            model_name='reaccion',
            old_name='Accion',
            new_name='accion',
        ),
        migrations.RenameField(
            model_name='reaccion',
            old_name='Imagen',
            new_name='imagen',
        ),
        migrations.RemoveField(
            model_name='post',
            name='postTribu',
        ),
        migrations.RemoveField(
            model_name='reaccionpost',
            name='NumReact',
        ),
        migrations.RemoveField(
            model_name='reaccionpost',
            name='Post',
        ),
        migrations.RemoveField(
            model_name='reaccionpost',
            name='Reaccion',
        ),
        migrations.AddField(
            model_name='post',
            name='numDislikes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='post',
            name='numHates',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='post',
            name='numLikes',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='post',
            name='numLoves',
            field=models.IntegerField(default=0),
        ),
    ]
