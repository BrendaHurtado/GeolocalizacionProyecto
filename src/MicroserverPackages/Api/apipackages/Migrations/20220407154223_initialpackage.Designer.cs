﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using apipackages.Data;

#nullable disable

namespace apipackages.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220407154223_initialpackage")]
    partial class initialpackage
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("apipackages.Models.DetailPackage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("CodePackage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("PackageId")
                        .HasColumnType("int");

                    b.Property<double>("PrecioPackage")
                        .HasColumnType("float");

                    b.Property<string>("TypePackage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("PackageId");

                    b.ToTable("DetailPackages");
                });

            modelBuilder.Entity("apipackages.Models.Package", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("DestinoPaquete")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("EstadoEntrega")
                        .HasColumnType("bit");

                    b.Property<DateTime>("FechaEntrega")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("FechaEnvio")
                        .HasColumnType("datetime2");

                    b.Property<int>("IdRuta")
                        .HasColumnType("int");

                    b.Property<double>("IvaPaquete")
                        .HasColumnType("float");

                    b.Property<string>("OrigenPaquete")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("SubtotalPaquete")
                        .HasColumnType("float");

                    b.Property<double>("TotalPaquete")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Packages");
                });

            modelBuilder.Entity("apipackages.Models.DetailPackage", b =>
                {
                    b.HasOne("apipackages.Models.Package", "Package")
                        .WithMany()
                        .HasForeignKey("PackageId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Package");
                });
#pragma warning restore 612, 618
        }
    }
}
